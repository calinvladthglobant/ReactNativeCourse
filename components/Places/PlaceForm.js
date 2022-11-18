import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import Colors from "../../constants/colors";
import ImagePicker from "./ImagePicker";

export default function PlaceForm() {
  const [title, setTitle] = useState('')

  function changeTitleHandler(data) {
    setTitle(data)
  }

  return <ScrollView>
    <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={changeTitleHandler} value={title}/>
        <ImagePicker/>
      </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 20
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 15,
    borderBottomColor: Colors.black,
    borderWidth: 1
  }
})