import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card } from "../../components";


interface Props {
  onPress: () => void;
}

function Home() {
  const FloatingActionButton:React.FC<Props> = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="add" size={24} color="#fff" />
    </TouchableOpacity>
  );


    
  const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#3f51b5',
      borderRadius: 50,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
    },
  });
  

  return (
    <View>
      <Text>Categorias/TECLADO</Text>     
      {/* aca debemos colocar un filtro o condicion que muestre cuatro Card */}
      <Card/>
      <FloatingActionButton onPress={()=>FloatingActionButton}/>

    </View>
  );
}

export default Home;
