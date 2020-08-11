import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { AppHeader } from './commons/header/AppHeader';
import { MoviePlayer } from './player/MoviePlayer';
import { HomeScreen } from './screens/HomeScreen';

/**
 * App component as an entry point for all platforms
 * @component
 * @example
 * return (
 *   <>
 *     <StatusBar />
 *      <SafeAreaView>
 *        <ScrollView>
 *          <AppHeader />
 *          <View />
 *          <MoviePlayer />
 *        </ScrollView>
 *      </SafeAreaView>
 *   </>
 * )
 */
export function App() {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView>
        <View style={{height:1080,width:1920}}>
          <HomeScreen />
        </View>
      </SafeAreaView>
    </>
  );
}
/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen/>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <AppHeader />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Code sharing using Monorepo
              </Text>
              <Text style={styles.sectionDescription}>
                Edit{' '}
                <Text style={styles.highlight}>
                  packages/components/App.tsx
                </Text>{' '}
                to change this screen and then come back to see your edits (in
                the phone or the browser).
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Web support via react-native-web
              </Text>
              <Text style={styles.sectionDescription}>
                Run{' '}
                <Text style={styles.highlight}>yarn workspace web start</Text>{' '}
                to open this app in the browser.
              </Text>
              <Text style={styles.sectionDescription}>
                It will share the same code from mobile, unless you create
                platform-specific files using the{' '}
                <Text style={styles.highlight}>.web.tsx</Text> extension (also
                supports <Text style={styles.highlight}>.android</Text>,{' '}
                <Text style={styles.highlight}>.ios</Text>,{' '}
                <Text style={styles.highlight}>.native</Text>, etc).
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView> */
/* <MoviePlayer
            width={800}
            height={500}
            url={'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}
          /> */
/**
 * stylesheet definitions for App
 */
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  fullScreen: {
    flex: 1,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

declare let global: any;
