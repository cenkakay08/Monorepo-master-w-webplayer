// Load the module
import React from 'react';
import Video from 'react-native-video';
import { View, StyleSheet } from 'react-native';
import { MoviePlayerPropTypes, defaultProps } from './proptypes';

/**
 * MoviePlayer component for native which uses react-native-video package
 * @component
 * @example
 * const url = "http://.mp4"
 * const width = 500
 * const height = 500
 * return (
 *   <View>
 *     <Video
 *       source={{ uri: url }}
 *       style={{
 *         width: width,
 *         height: height,
 *       }}
 *     />
 *   </View>
 * )
 */
const MoviePlayer = (props) => {
  const { url, width, height } = props;
  return (
    <View>
      <Video
        source={{ uri: url }}
        resizeMode="cover"
        paused={false}
        style={{
          ...styles.backgroundVideo,
          width,
          height,
        }}
      />
    </View>
  );
};

MoviePlayer.propTypes = MoviePlayerPropTypes;
MoviePlayer.defaultProps = defaultProps;

/**
 * stylesheet definitions for video
 */
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'relative',
  },
});

export { MoviePlayer };
