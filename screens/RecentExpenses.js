import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {useContext, useEffect, useState} from "react";
import {ExpensesContext} from "../store/expenses-context";
import {getDateMinusDays} from "../util/date";
import {fetchExpenses} from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(null)
  const expensesCtx = useContext(ExpensesContext)

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true)
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpense(expenses)
      } catch (error) {
        setError("Could not fetch expenses!")
      } finally {
        setIsFetching(false)
      }
    }

    getExpenses()
  }, [])

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7)
    return expense.date > date7DaysAgo
  })

  function errorHandler() {
    setError(null)
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }
  else if (isFetching) {
    return <LoadingOverlay/>
  } else {
    return <ExpensesOutput expenses={recentExpenses}
                           expensesPeriod="Last 7 days"
                           fallBackText="No expenses for the last 7 days"
    />
  }


}