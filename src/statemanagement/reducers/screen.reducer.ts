import * as mobileActions from '../actions/screen.actions';
import { ScreenState } from '../state/screen.state';

const initialState: ScreenState = {
  mobile: false,
  tablet: false,
  desktop: false,
};

export function screenReducer(state: ScreenState = initialState,
                              action: mobileActions.Actions): ScreenState {
  switch (action.type) {
    case mobileActions.ActionTypes.SET_SCREEN:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
