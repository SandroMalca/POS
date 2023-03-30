import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import { Home, Cart, Inventory, Stats, Config} from './containers';

=======
import { Home, Cart, Inventory, Stats, Config } from './screens';
>>>>>>> 18425b4941b591dccbbbcba48c6afa786dbc8c32

const Drawer = createDrawerNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Cart" component={Cart}/>
        <Drawer.Screen name="Inventory" component={Inventory}/>
       
        <Drawer.Screen name="Stats" component={Stats}/>
        <Drawer.Screen name="Profile" component={Config}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}