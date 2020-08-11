import React from 'react';
import { Route, Router } from 'react-router';
import history from 'dt-navigation/src/nativenavigation/history';
import { View } from 'react-native';
import { withRouter } from 'react-router-dom';
import Home from '../screens/Home';
import NavigationRoutes from './NavigationRoutes';

const AppNavigator = () => (
  <Router history={history}>
    <View flex={1} flexDirection="row">
      <Route exact path={NavigationRoutes.home} component={withRouter(Home)} />
    </View>
  </Router>
);

export default AppNavigator;
