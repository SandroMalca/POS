import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'
import { Icon } from '@rneui/base'
// import * as ImagePicker from 'expo-image-picker';
// import {Cloudinary} from 'cloudinary-react-native';
import {addProductStyles}  from "../addProduct/addProductStyles";

export default function addProduct() {
    const [name, setName] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, SetCantidad] = useState('');
    const [categoria, SetCategoria] = useState('');
    const [image, setImage] = useState(null);
  return (
    <View style={addProductStyles.container}>
      <View style={addProductStyles.top}>
        <Icon name='left'/>  
        <Text>Crear Producto</Text>
      </View>
      <View style={addProductStyles.cont2}>
        <Icon name='ball'></Icon>
        <Text>Cantidad</Text>
        <TextInput placeholder='0'></TextInput>
      </View>
      <View>
        <TextInput
             value={name}
             placeholder="Product Name"
             style={addProductStyles.text}
             onChangeText={input => setName(input)}
        />
        <TextInput
             value={categoria}
             placeholder="Product Name"
             style={addProductStyles.text}
             onChangeText={input => setName(input)}
        />
        <TextInput
             value={precio}
             placeholder="Product Name"
             style={addProductStyles.text}
             onChangeText={input => setName(input)}
        />
        
        <TextInput
             value={categoria}
             placeholder="Categoria"
             style={addProductStyles.text}
             onChangeText={input => setName(input)}
        />
        
      </View>
    </View>
  )
}