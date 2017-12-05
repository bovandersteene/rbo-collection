import * as searchActions from '../../actions/container/search.actions';
import { SearchState } from '../../state/container/search.state';
import { Page } from '../../../app/common/pagination/entities/page.entity';

const initialState: SearchState = {
  movies: [],
  page: {} as Page
};

export function searchReducer(state: SearchState = initialState,
                                  action: searchActions.Actions): SearchState {
  switch (action.type) {
    case searchActions.ActionTypes.SET_NEW_ARRIVALSS:
      return {
        movies: [ ...action.payload.movies ],
        page: { ...action.payload.page }
      };
    default:
      return state;
  }
}
