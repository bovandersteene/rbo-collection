import { ContainersState } from './container.state';

export type ApplicationState = Readonly<{
  containers: ContainersState;
}>;
