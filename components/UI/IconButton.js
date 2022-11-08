import {Pressable, StyleSheet, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";

export default function IconButton({name, size, color, onPress}) {
  return <Pressable onPress={onPress} style={({pressed}) => pressed && style.pressed}>
    <View style={style.container}>
      <AntDesign name={name} size={size} color={color}/>
    </View>
  </Pressable>
}

const style = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2
  },
  pressed: {
    opacity: .75
  }
})