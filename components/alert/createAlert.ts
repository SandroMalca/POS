import { Alert } from "react-native";

const createAlert = (title: string, message: string) =>
  Alert.alert(title, message, [
    {
      text: "Cancel",
      onPress: () => null,
      style: "cancel",
    },
    { text: "OK", onPress: () => null },
  ]);
export default createAlert;
