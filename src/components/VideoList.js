import React,{useEffect,useState} from 'react'
import {View,Text,ScrollView,Image} from 'react-native'
import api from '../Services/api'
import { FlatList } from 'react-native-gesture-handler'
import {useSelector} from 'react-redux'
export default function VideoTList(){
   
   const stream = useSelector(state=> state.stream)
   console.log(stream)
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