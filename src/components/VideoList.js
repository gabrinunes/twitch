import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import api from '../Services/api'
import { FlatList } from 'react-native-gesture-handler'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
export default function VideoTList(){
   
   const stream = useSelector(state=> state.stream)
   const navigation = useNavigation()
   function NavigateToDetailVideo(videoDetail){
     navigation.navigate('DetailVideo',{videoDetail})
   }
    return (
      <View style={{flexDirection:'column'}}>
        <FlatList
         style={{marginBottom:10}}
         data={stream}
         keyExtractor={streams=>String(streams._id)}
         onEndReachedThreshold={0.2}
         renderItem={({item:streams})=>(
              <View style={{backgroundColor:'#fff'}}>
             <View style={{marginRight:250,marginLeft:18}}>
         <Text>{streams.game}</Text>
         <Text>{streams.viewers}</Text>
            </View>
            <TouchableOpacity
            
            onPress={()=> NavigateToDetailVideo(streams)}>
            <View style={{alignItems:'flex-end'}}>
              <Image
              source={{uri:streams.preview.medium}}
              style={{width:150,height:100,bottom:40,marginRight:10}}
              />
            </View>
            </TouchableOpacity>
           </View>
         )}
        />
      </View>
    )
}