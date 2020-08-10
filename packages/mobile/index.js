import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import Root from 'shared/src/setup';

AppRegistry.registerComponent(appName, () => Root);
