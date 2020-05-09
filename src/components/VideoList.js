import React,{useEffect,useState} from 'react'
import {View,Text,ScrollView,Image} from 'react-native'
import api from '../Services/api'
import { FlatList } from 'react-native-gesture-handler'
export default function VideoTList(){
   const [stream,setStream]=useState([])
   async function Search(){
     const info = await api.get('https://api.twitch.tv/kraken/search/streams?query=dota2')
     setStream(info.data.streams)
     console.log(info.data)
    }
      useEffect(()=>{
        Search()
      },[])
    return (
      <View style={{flexDirection:'column'}}>
        <FlatList
         style={{marginBottom:10}}
         data={stream}
         keyExtractor={streams=>String(streams._id)}
         onEndReachedThreshold={0.2}
         renderItem={({item:streams})=>(
           <View>
             <View style={{marginRight:250,marginLeft:18}}>
         <Text>{streams.game}</Text>
         <Text>{streams.viewers}</Text>
            </View>
            <View style={{alignItems:'flex-end'}}>
              <Image
              source={{uri:streams.preview.medium}}
              style={{width:150,height:100,bottom:40,marginRight:10}}
              />
            </View>
           </View>
         )}
        />
      </View>
    )
}