// Load the module
import React from 'react';
import WebPlayer from 'react-native-web-player';
import { View, StyleSheet } from 'react-native';
import { MoviePlayerPropTypes, defaultProps } from './proptypes';
import styled from 'styled-components';
import './Player.css';

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
const Wrapper=styled.div`
overflow: hidden;

`
const StyledView=styled.div`
-webkit-transform:scale(1.5);-moz-transform-scale(1.5);

`

 
const MoviePlayer = (props) => {
  const { url, width, height } = props;
  return (
    <Wrapper>
    <StyledView >
      <WebPlayer  baseURL={url} style={{ width: width, height: height,}}  ></WebPlayer>
    </StyledView>
    </Wrapper>
    
  );
};

MoviePlayer.propTypes = MoviePlayerPropTypes;
MoviePlayer.defaultProps = defaultProps;

export { MoviePlayer };

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
