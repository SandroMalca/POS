import { View, Image, SafeAreaView, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'




export default function Config() {
    const [text, onChangeText] = React.useState('');
    
    // const styles = StyleSheet.create({
    //     input: {
    //       height: 40,
    //       margin: 12,
    //       borderWidth: 1,
    //       padding: 10,
    //     },
    //   });
  return (
    <SafeAreaView>
      <TextInput
        //style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nombre"
      />
      <TextInput
        //style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Apellido"
      />
      <TextInput
        //style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Teléfono"
      />
      <TextInput
        //style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />
      <TextInput
        //style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Contraseña"
      />
      <TouchableOpacity>Editar</TouchableOpacity>
    </SafeAreaView>
    
  )
}
