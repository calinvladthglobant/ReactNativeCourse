import {StyleSheet, Text, TextInput, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";

export default function Input({label, customStyle, error, textInputConfig}) {

  return <View style={[style.inputContainer, customStyle]}>
    <Text custonStyle={style.label}>{label}</Text>
    <TextInput style={[style.input, error && style.inputError, textInputConfig.multiline && style.inputMultiline]} {...textInputConfig}/>
  </View>
}

const style = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    // color: GlobalStyles.colors
  },
  input: {
    padding: 6,
    borderRadius: 6,
    fontSize: 15,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray500
  },
  inputError: {
    borderColor: GlobalStyles.colors.error500
  },
  inputMultiline: {
    height: 100,
    textAlignVertical: "top"
  }
})