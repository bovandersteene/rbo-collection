import { Action } from '@ngrx/store';
import { type } from '../../util/util';
import { Movie } from '../../../app/search/entity/search-response.entity';
import { Page } from '../../../app/search/entity/entities/page.entity';

export const ActionTypes = {
  SET_SEARCH_MOVIES: type<'SEARCH_SET_SEARCH_MOVIES'>('SEARCH_SET_SEARCH_MOVIES'),
};

export class SetSearch implements Action {
  type = ActionTypes.SET_SEARCH_MOVIES;
  payload: Readonly<{
    movies: Array<Movie>,
    page: Page
  }>;

  public constructor(movies: Array<Movie>,
                     page: Page) {
    this.payload = {
      movies,
      page
    };
  }
}

export type Actions = SetSearch;
