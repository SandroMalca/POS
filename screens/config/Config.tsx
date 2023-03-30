import { View, TextInput, Text } from "react-native";
import { useState } from "react";
import * as Yup from "yup";
import { styles } from "./ConfigStyles";
import { Avatar, Button } from "@rneui/themed";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Por favor ingresa tu nombre"),
  lastname: Yup.string().required("Por favor ingresa tu apellido"),
  email: Yup.string()
    .email("Por favor ingresa un correo electrónico válido")
    .required("Por favor ingresa tu correo electrónico"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Por favor ingresa tu contraseña"),
});
const Config=()=>{
const [formValues, setFormValues] = useState({
  name: "",
  lastname: "",
  email: "",
  password: "",
});
const [formErrors, setFormErrors] = useState({
  name: "",
  lastname: "",
  email: "",
  password: "",
});

const handleInputChange = (fieldName: string, value: string) => {
  setFormValues({ ...formValues, [fieldName]: value });
};

const handleFormSubmit = async () => {
  try {
    await validationSchema.validate(formValues, { abortEarly: false });
    console.log("Formulario válido");
  } catch (error:any) {
    const newFormErrors = error.inner.reduce(
      (acc: any, validationError: any) => ({
        ...acc,
        [validationError.path]: validationError.message,
      }),
      {}
    );
    setFormErrors(newFormErrors);
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          size={64}
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          containerStyle={{ backgroundColor: "#6733b9" }}
        />
      </View>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={formValues.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      {formErrors.name ? (
        <Text style={styles.error}>{formErrors.name}</Text>
      ) : null}

      <Text style={styles.label}>Apellido:</Text>
      <TextInput
        style={styles.input}
        value={formValues.lastname}
        onChangeText={(value) => handleInputChange("lastname", value)}
      />
      {formErrors.lastname ? (
        <Text style={styles.error}>{formErrors.lastname}</Text>
      ) : null}

      <Text style={styles.label}>Correo electrónico:</Text>
      <TextInput
        style={styles.input}
        value={formValues.email}
        onChangeText={(value) => handleInputChange("email", value)}
      />
      {formErrors.email ? (
        <Text style={styles.error}>{formErrors.email}</Text>
      ) : null}

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        value={formValues.password}
        onChangeText={(value) => handleInputChange("password", value)}
        secureTextEntry={true}
      />
      {formErrors.password ? (
        <Text style={styles.error}>{formErrors.password}</Text>
      ) : null}

    
      <Button 
         icon={{ name: "pencil", type: "font-awesome", color: "white" }}
         loading={false}
         loadingProps={{ size: 'small', color: 'white' }}
         buttonStyle={{
           backgroundColor: 'black',
           borderRadius: 5,
         }}
         containerStyle={{
           marginHorizontal: '40%',
           height: 50,
           width: 50,       
           marginVertical: 10,
         }}
        onPress={handleFormSubmit}
      />
    
      </View>
  );
};

export default Config;
