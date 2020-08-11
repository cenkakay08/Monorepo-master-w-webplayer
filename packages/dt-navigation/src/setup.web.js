import React from 'react';
import { View } from 'react-native';

export default function setupNavigation(AppNavigator) {
  const Root = () => {
    return (
      <>
        <View>
          <AppNavigator />
        </View>
      </>
    );
  };

  return Root;
}
