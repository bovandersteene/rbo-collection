import { ContainersState } from './container.state';
import { ScreenState } from './screen.state';

export type ApplicationState = Readonly<{
  containers: ContainersState;
  screen: ScreenState;
}>;
