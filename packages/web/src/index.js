import { AppRegistry } from 'react-native';

import Root from 'shared/src/setup';

AppRegistry.registerComponent('myprojectname', () => Root);
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
});
