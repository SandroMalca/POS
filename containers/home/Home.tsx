import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FAB } from "@rneui/themed";
import { Card } from "../../components";
import { IProduct } from "../../models/product.model";
import { data } from "../../utils/data";
import { ScrollView } from "react-native-gesture-handler";

function Home() {
  const [visible, setVisible] = useState(true);

  const styles = StyleSheet.create({
    button: {
      position: "absolute",
      bottom: 20,
      right: 20,
      backgroundColor: "#3f51b5",
      borderRadius: 50,
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      elevation: 8,
    },
    container: {
      backgroundColor: "#bbb",
      height: "100%",
    },
  });

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
        icon={{ name: "add", color: "white" }}
        style={styles.button}
        onPress={() => setVisible(!visible)}
      />
    </View>
  );
}

export default Home;
