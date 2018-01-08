import { ActionReducerMap, combineReducers, MetaReducer } from '@ngrx/store';
import { reset } from './metareducer/reset.reducer';
import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';
import { searchReducer } from './reducers/new-arrival/search.reducer';
import { ApplicationState } from './state/application.state';
import { screenReducer } from './reducers/screen.reducer';

export const reducerToken = new InjectionToken<ActionReducerMap<ApplicationState>>('Reducers');

const containersReducers = combineReducers({
  search: searchReducer,
});

export const rootReducer = {
  containers: containersReducers,
  screen: screenReducer,
};

export function getReducers() {
  return rootReducer;
}

export const reducerProvider = [
  {
    provide: reducerToken,
    useFactory: getReducers
  }
];

export const metaReducers: MetaReducer<ApplicationState>[] =
  environment.production ? [ reset ] : [ reset ];

export function getMetaReducers(): MetaReducer<ApplicationState>[] {
  return metaReducers;
}
