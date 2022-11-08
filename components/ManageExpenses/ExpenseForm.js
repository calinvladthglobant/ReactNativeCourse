import {Text, TextInput, View} from "react-native";
import Input from "./Input";

export default function ExpenseForm({label}) {
  return <View>
    <Input label="Amount"/>
    <Input label="Date"/>
    <Input label="Description"/>
  </View>
}