import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Page } from '../entity/entities/page.entity';
import { Movie } from '../entity/search-response.entity';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { SearchService } from '../service/search.service';
import { ApplicationState } from '../../../statemanagement/state/application.state';
import { Store } from '@ngrx/store';
import { SetSearch } from '../../../statemanagement/actions/container/search.actions';

@Injectable()
export class SearchSandboxService {
  movies$: Observable<Array<Movie>>;
  page$: Observable<Page> = this.store.select(state => state.containers.search.page);
  pageNumber$: Subject<number> = new ReplaySubject<number>();

  constructor(private searchService: SearchService,
              private store: Store<ApplicationState>) {

    const pageNumberChanged$ = Observable.combineLatest(this.pageNumber$, this.page$)
      .filter(([ pageNumber, page ]) => pageNumber !== null && ( !page || page.number !== pageNumber))
      .map(([ pageNumber, page ]) => pageNumber ? pageNumber : 1)
      .distinctUntilChanged();

    this.movies$ = pageNumberChanged$
      .switchMap(page => this.searchService.searchForMovie('james bond', page))
      .do(response => this.store.dispatch(new SetSearch(response.movies, response.page)))
      .map(result => result.movies)
      .merge(this.store.select(state => state.containers.search.movies));
  }
}
