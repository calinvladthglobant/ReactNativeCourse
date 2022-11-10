import {StyleSheet, Text, View} from "react-native";
import Button from "./Button";

export default function ErrorOverlay({message, onConfirm}) {
  return <View style={style.container}>
    <Text style={[style.text, style.title]}>An error occurred</Text>
    <Text style={style.text}>{message}</Text>
    <Button>Okay</Button>
  </View>
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24
  },
  text: {
    textAlign: "center",
    marginBottom: 8
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
})