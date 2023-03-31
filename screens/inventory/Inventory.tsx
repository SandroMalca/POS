import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {AddProduct, EditProduct} from '../index'

const Tab = createMaterialTopTabNavigator()

function Inventory() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AddProduct" component={AddProduct}/>
      <Tab.Screen name="EditProduct" component={EditProduct}/>
    </Tab.Navigator>
  );
}

export default Inventory;
