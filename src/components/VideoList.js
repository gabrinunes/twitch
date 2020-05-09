import React,{useEffect,useState} from 'react'
import {View,Text,ScrollView,Image} from 'react-native'
import api from '../Services/api'
import { FlatList } from 'react-native-gesture-handler'
export default function VideoTList(){
   const [stream,setStream]=useState([])
   async function Search(){
     const info = await api.get('https://api.twitch.tv/helix/streams?first=20')
     setStream(info.data.data)
    }

      useEffect(()=>{
        Search()
      },[])
    return (
      <View style={{flexDirection:'column'}}>
        <View style={{marginRight:250}}>
        <Text>Canal do Pirula</Text>
        <Text>Game:</Text>
        <Text>Visualizaçoes:</Text>
          </View>
          <View style={{alignItems:'flex-end'}}>
            <Image
            source={require('../../assets/hotel.jpg')}
            style={{width:100,height:100,bottom:60}}
            />
          </View>
      </View>
    )
}