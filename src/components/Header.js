import React ,{useState,useEffect} from 'react'
import {View,Text,TextInput,TouchableOpacity} from 'react-native'
import styles from './styles'
import api from '../Services/api'
import action from '../store/action'
import {useDispatch} from 'react-redux'
export default function Header(){
    const dispatch = useDispatch()
    const [text,setText]=useState('')

   async function Search(value){
      try {
      dispatch(action.setLoading(true))
      const info = await api.get(`https://api.twitch.tv/kraken/search/streams?query=${value}&limit=30`)  
      dispatch(action.setStream(info.data.streams))
      dispatch(action.setLoading(false)) 
      } catch (error) {
        console.log(error)
        dispatch(action.setLoading(false)) 
      }
    }

    async function HomeInit(){
      try {
      const info = await api.get(`https://api.twitch.tv/kraken/streams`)
      dispatch(action.setStream(info.data.streams))
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      HomeInit()
    },[])
    return(
       <View style={styles.header}>
         <View style={{flex:2}}>
           <TextInput
           placeholder="Search Streams ex:Overwatch"
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