import {StyleSheet, Text, View} from "react-native";
import {useContext, useLayoutEffect, useState} from "react";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/styles";
import {ExpensesContext} from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import {deleteExpense, storeExpense, updateExpense} from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function ManageExpenses({route, navigation}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
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

  async function confirmExpenseHandler(data) {
    setLoading(true)
    try {
      if (isEditing) {
        expensesCtx.updateExpense(expenseId, data)
        await updateExpense(expenseId, data)
      } else {
        const id = await storeExpense(data)
        expensesCtx.addExpense({...data, id: id})
      }
    } catch (error) {
      setError("Operation Error")
    } finally {
      setLoading(false)
      navigation.goBack()
    }
  }

  async function deleteExpenseHandler() {
    setLoading(true)
    try {
      await deleteExpense(expenseId)
      expensesCtx.deleteExpense(expenseId)
    } catch (error) {
      setError("Delete operation error")
    } finally {
      setLoading(false)
    }

    navigation.goBack()
  }

  function errorHandler() {
    setError(null)
  }

  if (error && !loading) {
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  } else if (loading) {
    return <LoadingOverlay/>
  } else {
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