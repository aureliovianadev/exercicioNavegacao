import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import {MaterialIcons} from '@expo/vector-icons'


import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from './screens/DetailsScreen';
import calculadoraScreen from './screens/DetailsScreen';
import DetailsScreen from './screens/DetailsScreen';

const MyStack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Sta.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' 
        component={HomeScreen} 
        options={{
          title: 'Início',
          staIcon:({color, size}) => (
            <MaterialIcons name='home' color={color} size={size}/>
          )
        }}/>
        <Drawer.Screen name='Details'
         component={DetailsScreen} 
         options={{
          title: 'Detalhes',
          drawerIcon:({color, size}) => (
            <MaterialIcons name='airplanemode-active' color={color} size={size}/>
          )
        }}/>
        <Drawer.Screen name='About' 
        component={AboutScreen} 
        options={{
          title: 'Sobre',
          drawerIcon:({color, size}) => (
            <MaterialIcons name='assistant' color={color} size={size}/>
          )
        }}/>
        <Drawer.Screen name='Product'
        component={ProductScreen}
        options={{
          title: 'Produtos',
          drawerIcon:({color, size}) => (
            <MaterialIcons name='propane-tank' color={color} size={size}/>
          )
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
