import { Alert } from "react-native";

const createAlert = (title: string, message: string) =>
  Alert.alert(title, message, [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
export default createAlert;
