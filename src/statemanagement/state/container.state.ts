import { SearchState } from './container/search.state';

export type ContainersState = Readonly<{
  search: SearchState;
}>;

