import React,{useState} from 'react'
import {View} from 'react-native'
import {WebView} from 'react-native-webview'
import {useRoute} from '@react-navigation/native'
import Spinner from 'react-native-loading-spinner-overlay'
import styles from './styles'
export default function DetailVideo(){
    const route = useRoute()
    const video = route.params.videoDetail
    const [loading,Setloading]=useState(true)
    function load(){
        Setloading(false)
    }
    return(
        <View style={styles.container}>
            <Spinner
            visible={loading}
            />
            <WebView
            allowsFullscreenVideo={true}
            source={{uri:video.channel.url}}
            onLoadEnd={()=> load()}
            />
        </View>
    )
}