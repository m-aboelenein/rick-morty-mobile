import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer as NativeNavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../routes';

const MainStack = createStackNavigator();

export default function NavigationContainer() {
  return (
    <NativeNavigationContainer>
      <MainStack.Navigator headerMode="none" initialRouteName={ROUTES[0].name}>
        {ROUTES.map((route) => (
          <MainStack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </MainStack.Navigator>
    </NativeNavigationContainer>
  );
}
