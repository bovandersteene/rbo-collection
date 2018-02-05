import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, map, mapTo, startWith, tap } from 'rxjs/operators';
import { AppSandboxService } from './sandbox/app-sandbox.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'rbo-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  private _resize$: Observable<number>;
  mobile$ = this.sb.mobile$;
  tablet$ = this.sb.tablet$;
  desktop$ = this.sb.desktop$;

  constructor(private sb: AppSandboxService) {
  }

  ngOnInit(): void {
    this._resize$ = Observable.fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        mapTo( window.innerWidth),
        distinctUntilChanged(),
        startWith(window.innerWidth),
        tap(width => this.sb.setWindowWidth(width))
      );
    this._resize$.subscribe();
  }

}
