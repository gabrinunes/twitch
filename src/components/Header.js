import React from 'react'
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Header(){

    function Search(){
        console.log('uhasa')
    }
    return(
       <View style={styles.header}>
         <View style={{flex:2}}>
           <TextInput style={{padding:10}}
           placeholder="Search..."
           />
         </View>
         <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>
       </View>
    )
}