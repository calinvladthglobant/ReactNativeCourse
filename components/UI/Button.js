import {Pressable, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";

export default function Button({children, onPress, mode}) {
  return <View style={[style.button, mode === "flat" && style.buttonFlat ]}>
    <Pressable style={({pressed}) => pressed && style.pressed} onPress={onPress}>
      <View>
        <Text style={[style.text, mode === 'flat' && style.textFlat]}>{children}</Text>
      </View>
    </Pressable>
  </View>
}

const style = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.black,
    color: GlobalStyles.colors.black
  },
  buttonFlat: {
    backgroundColor: GlobalStyles.colors.gray500
  },
  text: {
    textAlign: "center",
  },
  textFlat: {
    color: GlobalStyles.colors.white
  },
  pressed: {
    opacity: .75
  },
})