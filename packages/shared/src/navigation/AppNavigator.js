import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import NavigationRoutes from './NavigationRoutes';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

/**
 * Create react navigation routers
 */
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={NavigationRoutes.home} component={Home} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
