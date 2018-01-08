import { Action } from '@ngrx/store';
import { type } from '../util/util';

export const ActionTypes = {
  SET_SCREEN: type<'SET_SCREEN'>('SET_SCREEN'),
};
const MOBILE_MAX_WIDTH = 425;
const TABLET_MAX_WIDTH = 1024;


export class SetScreen implements Action {
  type = ActionTypes.SET_SCREEN;
  payload: Readonly<{
    mobile: boolean,
    tablet: boolean,
    desktop: boolean
  }>;

  public constructor(width: number) {
    const mobile = width <= MOBILE_MAX_WIDTH;
    const tablet = width <= TABLET_MAX_WIDTH && width > MOBILE_MAX_WIDTH;
    this.payload = {
      mobile,
      tablet,
      desktop: !mobile && !tablet,
    };
  }
}

export type Actions = SetScreen;
