import React from 'react';
import { View } from 'react-native';

export default function setupNavigation(AppNavigator) {
  const Root = () => {
    return (
      <React.Fragment>
        <View>
          <AppNavigator />
        </View>
      </React.Fragment>
    );
  };

  return Root;
}
