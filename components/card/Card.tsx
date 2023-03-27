import { Text, View, Image} from "react-native";
import { CardStyles } from "./CardSyles";
import { IProduct } from "../../models/product.model";

interface Props {
  data: IProduct;
}

function Card({ data }: Props) {
  
  return (
    <View style={CardStyles.container}>
      <Image source={{uri: data.image}} style={{width: 100, height: 100}}/>
      <Text>{data.precio}</Text>
      <Text>{data.name}</Text>
    </View>
  );
}

export default Card;
