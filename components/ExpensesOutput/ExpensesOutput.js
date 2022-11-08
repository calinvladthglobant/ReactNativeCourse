import {StyleSheet, Text, View} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";


export default function ExpensesOutput({expenses, expensesPeriod, fallBackText}) {
  let content = <Text style={style.fallBackText}>{fallBackText}</Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses}/>
  }

  return <View style={style.container}>

    <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
    {content}

  </View>
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
  },
  fallBackText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 32
  }
})