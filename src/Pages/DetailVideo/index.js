import React,{useState} from 'react'
import {View,Alert} from 'react-native'
import {WebView} from 'react-native-webview'
import {useRoute,useNavigation} from '@react-navigation/native'
import Spinner from 'react-native-loading-spinner-overlay'
import styles from './styles'
export default function DetailVideo(){
    const route = useRoute()
    const navigation = useNavigation()
    const video = route.params.videoDetail
    const [loading,Setloading]=useState(true)

    function load(){
        setTimeout(()=> Setloading(false),2000)
    }

    function BackHome(){
      navigation.goBack()
    }

    function alert(){
        Alert.alert(
            "Aconteceu algo de errado",
            "Por favor verifique sua conexão e tente denovo",
            [
                {text:"OK",onPress:()=>BackHome()}
            ],
            {cancelable:true}
        )
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
            onError={()=>alert()}
            />
        </View>
    )
}