import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { FAB } from "@rneui/themed";
import { Card } from "../../components";
import { IProduct } from "../../models/product.model";
import { data } from "../../utils/data";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./HomeStyles";

function Home() {
  const [visible, setVisible] = useState(true);

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
        {data.products.map((product: IProduct) => (
          <Card data={product} key={`${product.id}-product`} />
        ))}
      </ScrollView>
      <FAB
        visible={visible}
        icon={<Icono />}
        style={styles.button}
        color="black"
        onPress={() => setVisible(!visible)}
      />
    </View>
  );
}

export default Home;
