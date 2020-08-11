import React from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { navigationRef } from './nativenavigation/react-navigation-context';

export default function setupNavigation(AppNavigator) {
  const Root = () => {
    return (
      <NavigationContainer ref={navigationRef}>
        <>
          <View>
            <AppNavigator />
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            />
          </View>
        </>
      </NavigationContainer>
    );
  };

  return Root;
}
