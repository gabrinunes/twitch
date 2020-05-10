import React ,{useState} from 'react'
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native'
import styles from './styles'
import api from '../Services/api'
import action from '../store/action'
import {useDispatch} from 'react-redux'
export default function Header(){
    const dispatch = useDispatch()
    const [text,setText]=useState('')
   async function Search(value){
      const info = await api.get(`https://api.twitch.tv/kraken/search/streams?query=${value}`)
      dispatch(action.setStream(info.data.streams))
    }

    return(
       <View style={styles.header}>
         <View style={{flex:2}}>
           <TextInput
           placeholder="Search..."
           onChangeText={(val)=> setText(val)}
           />
         </View>
         <View>
            <TouchableOpacity onPress={()=>Search(text)} style={styles.button}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>
       </View>
    )
}