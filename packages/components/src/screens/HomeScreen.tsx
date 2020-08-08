import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { MoviePlayer } from '../player/MoviePlayer';

export function HomeScreen() {
  return (
    <View style={styles.fullScreenVideo}>
      <MoviePlayer
        width={1920}
        height={1080}
        url={
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenVideo: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 1920,
    height: 1080,
  },
});
