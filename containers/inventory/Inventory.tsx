import { useNavigation,Link } from "@react-navigation/native";
import { Text, View,Button } from "react-native";


function Inventory({navigation}:any) {

const navigate=useNavigation();

  return (
    <View>
      <Text>Inventory</Text>
      <Button title="Inventory" onPress={() => navigation.navigate('Cart')}></Button>
    </View>
  );
}

export default Inventory;
