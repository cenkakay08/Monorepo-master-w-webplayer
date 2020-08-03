// Load the module
import React from 'react';
import WebPlayer from 'react-native-web-player';
import { View, StyleSheet } from 'react-native';
import { MoviePlayerPropTypes, defaultProps } from './proptypes';

/**
 * MoviePlayer component for web which uses react-native-web-player package
 * @component
 * @example
 * const url = "http://.mp4"
 * const width = 500
 * const height = 500
 * return (
 *   <View>
 *     <WebPlayer
 *       baseURL={url}
 *       style={{ width: width, height: height }}
 *     />
 *   </View>
 * )
 */
const MoviePlayer = (props) => {
  const { url, width, height } = props;
  return (
    <View style={styles.backgroundVideo}>
      <WebPlayer baseURL={url} style={{ width: width, height: height }} />
    </View>
  );
};

MoviePlayer.propTypes = MoviePlayerPropTypes;
MoviePlayer.defaultProps = defaultProps;

export { MoviePlayer };

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    left:0,
    top:0,
  },
});