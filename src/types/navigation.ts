import {StackNavigationProp} from '@react-navigation/stack';

export type NavigationProps = StackNavigationProp<
  Record<string, object | undefined>,
  string
>;

export type ScreenProps = {
  navigation: NavigationProps;
  route: {
    key?: string;
    name?: string;
    params?: unknown;
  };
};
