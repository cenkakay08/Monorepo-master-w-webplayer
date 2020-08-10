import React from 'react';
import { View } from 'react-native';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { navigationRef } from './nativenavigation/react-navigation-context';

export default function setupNavigation(AppNavigator) {
  const Root = () => {
    return (
      <NavigationContainer ref={navigationRef}>
        <React.Fragment>
          <View>
            <AppNavigator />
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            />
          </View>
        </React.Fragment>
      </NavigationContainer>
    );
  };

  return Root;
}
