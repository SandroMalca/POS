import { StyleSheet, Text, View } from "react-native";
import {data} from "../../utils/data";

function Card() {
  return (
    <View>
      {data.products.map(item=>(
        <>
          <Text>{item.precio}</Text>
          <Text>{item.name}</Text>        
        </>
      ))}
      
    </View>
  );
}

export default Card;
