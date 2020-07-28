// Load the module
import React from 'react'
import WebPlayer from 'react-native-web-player'
import { View, StyleSheet } from 'react-native'

export function MoviePlayer(props) {
    const data = props.data;
    return <View>
        <WebPlayer baseURL={data.url}
            style={{ width: data.width, height: data.height }} />
    </View>
};