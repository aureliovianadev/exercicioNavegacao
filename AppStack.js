import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from './screens/DetailsScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';
import ImcScreen from './screens/ImcScreen';

const Stack = createStackNavigator()

export default function AppStack2(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
        <Stack.Screen name='Calculadora' component={CalculadoraScreen} />
        <Stack.Screen name='IMC' component={ImcScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}