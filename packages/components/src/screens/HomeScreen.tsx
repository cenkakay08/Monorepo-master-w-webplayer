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
import { 
  API_URL, 
  MOVIE_PLAYER_HEIGHT,
  MOVIE_PLAYER_WIDTH,
  MOVIE_PLAYER_URL,
} from '../movies/config.js'

export function HomeScreen() {
  return (
    <View style={styles.fullScreenVideo}>
      <View>
        <MoviePlayer
          width={MOVIE_PLAYER_WIDTH}
          height={MOVIE_PLAYER_HEIGHT}
          url={
            MOVIE_PLAYER_URL
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
    top: 0,
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
