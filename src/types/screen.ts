import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export type GlobalScreenTypes = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
};

export type NavigationType = NavigationProp<ParamListBase>;

export type routeType = RouteProp<ParamListBase>;

export type navigationType = NavigationProp<ParamListBase>;
