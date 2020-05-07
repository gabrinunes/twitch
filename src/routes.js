import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const AppStack = createStackNavigator()
import Home from './Pages/Home'
export default function Routes(){
    return(
      <NavigationContainer>
         <AppStack.Navigator screenOptions={{headerShown:true}}>
           <AppStack.Screen name ="Home" component={Home}/>
         </AppStack.Navigator>
      </NavigationContainer>
    )
}