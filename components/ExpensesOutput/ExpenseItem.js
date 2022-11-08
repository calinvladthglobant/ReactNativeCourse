import {Pressable, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";
import {getFormattedDate} from "../../util/date";
import {useNavigation} from "@react-navigation/native";

export default function ExpenseItem({id, description, amount, date}) {
  const navigation = useNavigation()

  function expensePressHandler() {
    navigation.navigate("ManageExpenses", {expenseId: id})
  }

  return <Pressable onPress={expensePressHandler} style={({pressed}) => pressed && style.pressed}>
    <View style={style.item}>
      <View>
        <Text style={style.description}>{description}</Text>
        <Text>{getFormattedDate(date)}</Text>
      </View>
      <View style={style.amountContainer}>
        <Text style={style.amount}>{amount}</Text>
      </View>
    </View>
  </Pressable>
}

const style = StyleSheet.create({
  item: {
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.white,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray100
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  amount: {
    fontWeight: "bold"
  },
  pressed: {
    opacity: .75
  }
})