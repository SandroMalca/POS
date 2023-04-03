import { Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { ICartState } from "../../redux/slices/cartSlices";
import { ICartItem } from "../../models";

type CartState = {
  cart: ICartState;
};

function Cart() {
  const cartItems = useSelector((state: CartState) => state.cart.products);

  return (
    <View>
      <Text>Cart</Text>
      {!cartItems.length && <Text>Empty cart</Text>}
      {cartItems && (
        <ScrollView>
          {cartItems.map((item: ICartItem) => (
            <></>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

export default Cart;