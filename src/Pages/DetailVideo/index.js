import React from 'react'
import {View} from 'react-native'
import {WebView} from 'react-native-webview'
import {useRoute} from '@react-navigation/native'
import styles from './styles'
export default function DetailVideo(){
    const route = useRoute()
    const video = route.params.videoDetail
    console.log(video)
    return(
        <View style={styles.container}>
            <WebView
            allowsFullscreenVideo={true}
            source={{uri:video.channel.url}}
            />
        </View>
    )
}