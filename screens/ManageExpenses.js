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

  const selectedExpense = expensesCtx.expenses.find(o => o.id === expenseId)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    })
  }, [navigation, isEditing])

  function cancelHandler() {
    navigation.goBack()
  }

  function confirmExpenseHandler(data) {
    if (isEditing) expensesCtx.updateExpense(expenseId, {description: "TEST UPDATE"})
    else expensesCtx.addExpense(data)
    navigation.goBack()
  }

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(expenseId)
    navigation.goBack()
  }


  return <View style={style.container}>
    <ExpenseForm onCancel={cancelHandler} onSubmit={confirmExpenseHandler}
                 submitButtonLabel={isEditing ? "Update" : "Add"} defaultValues={selectedExpense}/>
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderColor: GlobalStyles.colors.black,
    alignItems: "center"
  }
})