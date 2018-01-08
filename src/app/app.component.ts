import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';
import { AppSandboxService } from './sandbox/app-sandbox.service';

@Component({
  selector: 'rbo-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
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
        map(() => window.innerWidth),
        distinctUntilChanged(),
        startWith(window.innerWidth),
        tap(width => this.sb.setWindowWidth(width)),
        tap(console.log)
      );
    this._resize$.subscribe();
  }

  ngOnDestroy(): void {
    this._resize$.distinctUntilChanged();
  }
}
