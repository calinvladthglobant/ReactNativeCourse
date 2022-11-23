import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function IconButton({icon, size, color, onPress}) {
  return <Pressable style={({pressed}) => [styles.button, pressed && styles.buttonPressed]} onPress={onPress}>
    <Ionicons name={icon} size={size} color={color}/>
  </Pressable>
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonPressed: {
    opacity: .75
  }
})