import WebPlayer from 'react-native-web-player'
import { View } from 'react-native'

export function Movieplayer() {
    return <View>
    <WebPlayer style={{ width: 800, height: 500 }} baseURL= "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
    </View>
}