import setupApp from 'reduxstore/src/setup';
import setupNavigation from 'dt-navigation/src/setup';
import AppNavigator from './navigation/AppNavigator';

const Root = setupApp(setupNavigation(AppNavigator));

export default Root;
