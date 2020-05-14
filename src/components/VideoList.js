import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import api from '../Services/api'
import { FlatList } from 'react-native-gesture-handler'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import Spinner from 'react-native-loading-spinner-overlay'
import styles from './styles'
export default function VideoTList(){
   
   const stream = useSelector(state=> state.stream)
   const loading = useSelector(state=> state.loading)
   const navigation = useNavigation()
   function NavigateToDetailVideo(videoDetail){
     navigation.navigate('DetailVideo',{videoDetail})
   }
    return (
      <View style={{flexDirection:'column'}}>
        <Spinner
        visible={loading}
        />
        <FlatList
         style={styles.containerFlatList}
         data={stream}
         keyboardShouldPersistTaps='always'
         keyExtractor={streams=>String(streams._id)}
         onEndReachedThreshold={0.2}
         renderItem={({item:streams})=>(
             <TouchableOpacity onPress={()=>NavigateToDetailVideo(streams)}>
                <View style={styles.VideoCards}>
             <View style={styles.containerText}>
         <Text style={styles.nameGame}>{streams.game}</Text>
         <Text style={styles.videoInfo}>Views:{streams.viewers}</Text>
         <Text style={styles.videoInfo}>Channel:{streams.channel.display_name}</Text>
            </View>
            <View style={styles.thumbImage}>
              <Image
              source={{uri:streams.preview.medium}}
              style={{width:100,height:80,bottom:64,marginRight:10}}
              />
            </View>
           </View> 
             </TouchableOpacity>
         )}
        />
      </View>
    )
}