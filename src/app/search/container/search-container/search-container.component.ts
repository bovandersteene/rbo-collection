import { Component, OnInit } from '@angular/core';
import { SearchSandboxService } from '../../sandbox/search-sandbox.service';
import { Movie } from '../../entity/search-response.entity';
import { Observable } from 'rxjs/Observable';
import { Page } from '../../entity/entities/page.entity';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'rbo-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: [ './search-container.component.scss' ]
})
export class SearchContainerComponent implements OnInit {
  target = '/search';
  movies$: Observable<Array<Movie>>;
  page$: Observable<Page>;

  pageTestShort = {
    size: 10,
    totalElements: 30,
    totalPages: 3,
    number: 1
  };
  pageTestFirst = {
    size: 10,
    totalElements: 100,
    totalPages: 10,
    number: 1
  };
  pageTestSecond = {
    size: 10,
    totalElements: 100,
    totalPages: 10,
    number: 2
  };
  pageTestMiddle = {
    size: 10,
    totalElements: 100,
    totalPages: 10,
    number: 5
  };
  pageTestLast1 = {
    size: 10,
    totalElements: 100,
    totalPages: 10,
    number: 9
  };
  pageTestLast = {
    size: 10,
    totalElements: 100,
    totalPages: 10,
    number: 10
  };

  constructor(private searchSandbox: SearchSandboxService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const pageNumber$ = this.activeRoute.params
      .map(params => params.page)
      .do(pageNumber => this.checkPageNumber(pageNumber))
      .filter(pageNumber => pageNumber)
      .map(pageNumber => +pageNumber)
      .distinctUntilChanged()
      .do(pageNumber => this.searchSandbox.pageNumber$.next(pageNumber));

    this.movies$ = this.searchSandbox.movies$;
    this.page$ = Observable.combineLatest(pageNumber$, this.searchSandbox.page$)
      .do(([ pageNumber, page ]) => this.checkPageNumber(pageNumber, page))
      .map(([ pageNumber, page ]) => page);

  }

  private checkPageNumber(pageNumber: number, page?: Page) {
    if (!pageNumber || pageNumber < 1) {
      this.router.navigate([ this.target, 1 ]);
    } else if (page && page.totalPages < pageNumber) {
      this.router.navigate([ this.target, page.totalPages ]);
    }
  }
}
