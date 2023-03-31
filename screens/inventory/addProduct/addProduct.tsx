import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, {useState} from 'react'
import {addProductStyles}  from "./addProductStyles";
import {createProduct} from '../../../services/api/products'

function AddProduct() {
    const [name, setName] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, SetCantidad] = useState('');
    const [categoria, SetCategoria] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = () => {
      
    }

  return (
    <View style={addProductStyles.container}>


      <View style={addProductStyles.top}>
        <Text>Crear Producto</Text>
      </View>
      <View style={addProductStyles.cont2}>
        <Text>Cantidad</Text>
        <TextInput placeholder='0'></TextInput>
      </View>
      <View style={addProductStyles.fields}>
        <TextInput
             value={name}
             placeholder="Product Name"
             style={addProductStyles.textinput}
             onChangeText={input => setName(input)}
        />
        <TextInput
             value={categoria}
             placeholder="Category"
             style={addProductStyles.textinput}
             onChangeText={input => setName(input)}
        />
        <TextInput
             value={precio}
             placeholder="Price"
             style={addProductStyles.textinput}
             onChangeText={input => setName(input)}
        />
        
        <TextInput
             value={cantidad}
             placeholder="Amount"
             style={addProductStyles.textinput}
             onChangeText={input => setName(input)}
        />
        
      </View>
      <Button title='Add' onPress={handleSubmit}/>
    </View>
  )
}

export default AddProduct