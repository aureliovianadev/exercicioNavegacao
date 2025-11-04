import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialIcons} from '@expo/vector-icons'


import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from './screens/DetailsScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';
import ImcScreen from './screens/ImcScreen';

const Tab = createBottomTabNavigator()

export default function AppTabs(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' 
        component={HomeScreen} 
        options={{
          title: 'Início',
          tabBarIcon:({color, size}) => (
            <MaterialIcons name='home' color={color} size={size}/>
          )
        }}/>
        <Tab.Screen name='Details'
         component={DetailsScreen} 
         options={{
          title: 'Detalhes',
          tabBarIcon:({color, size}) => (
            <MaterialIcons name='airplanemode-active' color={color} size={size}/>
          )
        }}/>
        <Tab.Screen name='Calculadora' 
        component={CalculadoraScreen} 
        options={{
          title: 'Calculadora',
          tabBarIcon:({color, size}) => (
            <MaterialIcons name='assistant' color={color} size={size}/>
          )
        }}/>
        <Tab.Screen name='IMC'
        component={ImcScreen}
        options={{
          title: 'IMC',
          tabBarIcon:({color, size}) => (
            <MaterialIcons name='propane-tank' color={color} size={size}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}