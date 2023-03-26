import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Cart, Inventory, Stats } from './containers';

const Drawer = createDrawerNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Cart" component={Cart}/>
        <Drawer.Screen name="Inventory" component={Inventory}/>
        <Drawer.Screen name="Stats" component={Stats}/>
        {/* <Drawer.Screen name="Ajustes" component={Config}/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
