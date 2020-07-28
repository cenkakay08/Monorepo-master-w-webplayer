// Load the module
import React from 'react'
import Video from 'react-native-video';
import { View, StyleSheet } from 'react-native'

export function MoviePlayer(props) {
    const onBuffer = () => {};
    const onVideoError = () => {};

    const data = props.data;
    // Within your render function, assuming you have a file called
    // "background.mp4" in your project. You can include multiple videos
    // on a single screen if you like.
    return <View>
        <Video source={{uri: data.url}}   // Can be a URL or a local file.
            resizeMode="cover"
            onBuffer={onBuffer}                // Callback when remote video is buffering
            onError={onVideoError}  
            paused={false}
            style={{...styles.backgroundVideo, width: data.width, height: data.height}} />
    </View>
}

// Later on in your styles..
var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'relative'
    },
});