import React from 'react';
import { View,Text} from 'react-native';

import Header from '../../components/Header'
import VideoList from '../../components/VideoList'
import styles from './styles'
export default function Home(){
    return(
        <View style={styles.container}>
            <Header/>
            <VideoList/>
        </View>
    )
}