import { StyleSheet, Text, View, Image, Button } from "react-native";
import { FAB } from "@rneui/themed";
import { Card } from "../../components";
import { IProduct } from "../../models/product.model";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./HomeStyles";
import { ListItem } from "@rneui/base";
import { Link, useNavigation } from "@react-navigation/native";
import { useGetProducts } from "../../services/api/products";

function Home({ navigation }: any) {
  const { products, loading, error } = useGetProducts();

  const Icono = () => {
    return (
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/263/263142.png",
        }}
        style={{ width: 30, height: 30, tintColor: "white" }}
      />
    );
  };
  
  return (
    <View>
      <Text>Categorias/TECLADO</Text>
      <ScrollView style={styles.container}>
        <View style={styles.cards}>
          {products && products.map((product: IProduct) => (
            <Card data={product} key={product.id}/>
          ))}
        </View>
      </ScrollView>

      <FAB
        icon={<Icono />}
        style={styles.button}
        color="black"
        onPress={() => navigation.navigate("Cart")}
      />
    </View>
  );
}

export default Home;
