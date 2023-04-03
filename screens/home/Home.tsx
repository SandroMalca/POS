import { Text, View, Image } from "react-native";
import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FAB } from "@rneui/themed";
import { Card } from "../../components";
import { IProduct } from "../../models/product.model";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./HomeStyles";
import { useGetProducts } from "../../services/api/products";
import {setAllProducts, IproductsState} from '../../redux/slices/productsSlices'

type ProductsState = {
  products: IproductsState
}

function Home({ navigation }: any) {
  const { products, loading, error } = useGetProducts();
  const dispatch = useDispatch()

  useEffect(()=>{
  products && dispatch(setAllProducts(products))  
  },[products])

  const data = useSelector((state:ProductsState) => state.products.filteredProducts)

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
          {data && data.map((product: IProduct) => (
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
