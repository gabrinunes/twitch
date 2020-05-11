import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const AppStack = createStackNavigator()
import Home from './Pages/Home'
import DetailVideo from './Pages/DetailVideo'
export default function Routes(){
    return(
      <NavigationContainer>
         <AppStack.Navigator screenOptions={{headerShown:false}}>
           <AppStack.Screen name ="Home" component={Home}/>
           <AppStack.Screen name ="DetailVideo" component={DetailVideo}/>
         </AppStack.Navigator>
      </NavigationContainer>
    )
}