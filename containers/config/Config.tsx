import { TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./ConfigStyles";
import { Input, Avatar, Button } from "@rneui/themed";

export default function Config() {
  return (
    <View>
      <View style={styles.avatar}>
        <Avatar
            size={64}
            rounded
            icon={{ name: 'pencil', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#6733b9' }}
        />      
      </View>
      <Input
        placeholder="Ingrese su Nombre"
        leftIcon={{ type: "font-awesome", name: "comments" }}
      />
      <Input
        placeholder="Ingrese su Apellido"
        leftIcon={{ type: "font-awesome", name: "comments" }}
      />
      <Input
        placeholder="Ingrese su Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
      />
      <Input placeholder="Password" secureTextEntry={true} />
      <Button
              title="Actualizar"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: '20%',
                height: 50,
                width: 200,
                marginVertical: 30,
              }}
              onPress={() => console.log('crack')}
            />
    </View>
  );
}
