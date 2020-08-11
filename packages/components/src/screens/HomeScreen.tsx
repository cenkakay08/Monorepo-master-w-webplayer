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
import { MovieBox } from '../movies/MovieBox';
import styled from 'styled-components';

export function HomeScreen() {
  return (
    <View style={styles.fullScreenVideo}>
      <View>
        <MoviePlayer
          width={1920}
          height={1080}
          url={
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
          }
        />
      </View>
      <View>
        <MovieBox></MovieBox>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenVideo: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 1920,
    height: 1080,
  },
  movieBox: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 1920,
    height: 470,
  },
});
