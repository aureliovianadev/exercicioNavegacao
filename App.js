import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CalculadoraScreen from './screens/CalculadoraScreen'; 
import ImcScreen from './screens/ImcScreen'; 

const Drawer = createDrawerNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Início',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Detalhes',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="airplanemode-active" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Calculadora"
          component={CalculadoraScreen} 
          options={{
            title: 'Calculadora',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="assistant" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="IMC"
          component={ImcScreen} 
          options={{
            title: 'IMC',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="propane-tank" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
