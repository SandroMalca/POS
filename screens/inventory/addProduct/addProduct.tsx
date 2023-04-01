import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { addProductStyles } from "./addProductStyles";
import { createProduct } from "../../../services/api/products";
import { createAlert } from "../../../components/index";
import { IProductForm } from "../../../models";

function AddProduct() {
  const formInitialState = {
    name: "",
    price: "0",
    category: "",
    amount: "0",
    image: "",
  };
  const [formData, setFormData] = useState<IProductForm>(formInitialState);

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    createAlert("Succes!", "Product created");
    createProduct(formData)
      .then((res) => console.log(res?.message))
      .catch((err) => console.log(err));
    //setFormData(formInitialState);
  };

  return (
    <View style={addProductStyles.container}>
      <View style={addProductStyles.top}>
        <Text>Crear Producto</Text>
      </View>
      <View style={addProductStyles.cont2}>
        <Text>Cantidad</Text>
        <TextInput placeholder="0"></TextInput>
      </View>
      <View style={addProductStyles.fields}>
        <TextInput
          value={formData.name}
          placeholder="Product Name"
          style={addProductStyles.textinput}
          onChangeText={(input) => handleChange("name", input)}
        />
        <TextInput
          value={formData.category}
          placeholder="Category"
          style={addProductStyles.textinput}
          onChangeText={(input) => handleChange("category", input)}
        />
        <TextInput
          value={formData.price}
          placeholder="Price"
          style={addProductStyles.textinput}
          onChangeText={(input) => handleChange("price", input)}
        />
        <TextInput
          value={formData.amount}
          placeholder="Amount"
          style={addProductStyles.textinput}
          onChangeText={(input) => handleChange("amount", input)}
        />
        <TextInput
          value={formData.image}
          placeholder="Image"
          style={addProductStyles.textinput}
          onChangeText={(input) => handleChange("image", input)}
        />
      </View>
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
}

export default AddProduct;
