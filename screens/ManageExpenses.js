import {StyleSheet, Text, View} from "react-native";
import {useContext, useLayoutEffect} from "react";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/styles";
import Button from "../components/UI/Button";
import {ExpensesContext} from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";

export default function ManageExpenses({route, navigation}) {
  const expensesCtx = useContext(ExpensesContext)
  const expenseId = route.params?.expenseId
  const isEditing = !!expenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    })
  }, [navigation, isEditing])

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(expenseId)
    navigation.goBack()
  }

  function cancelHandler() {
    navigation.goBack()
  }

  function confirmExpenseHandler() {
    if (isEditing) expensesCtx.updateExpense(expenseId, {description: "TEST UPDATE"})
    else expensesCtx.addExpense({description: "TEST", amount: 19.99, date: new Date()})
    navigation.goBack()

  }

  return <View style={style.container}>
    <ExpenseForm/>
    <View style={style.buttonsContainer}>
      <View style={style.buttonContainer}>
        <Button onPress={cancelHandler}>Cancel</Button>
      </View>
      <View style={style.buttonContainer}>
        <Button mode="flat" onPress={confirmExpenseHandler}>{isEditing ? "Update" : "Add"}</Button>
      </View>
    </View>
    {
      isEditing && <View style={style.deleteContainer}>
        <IconButton name="delete" color={GlobalStyles.colors.error500} size={30} onPress={deleteExpenseHandler}/>
      </View>
    }
  </View>
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 7
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderColor: GlobalStyles.colors.black,
    alignItems: "center"
  }
})