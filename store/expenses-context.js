import {createContext, useReducer} from "react";


export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  setExpense: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, {description, amount, date}) => {}
})

export function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [{...action.payload}, ...state]
    case "SET":
      const inverted = action.payload.reverse()
      return inverted
    case "UPDATE":
      const index = state.findIndex(o => o.id === action.payload.id)
      const updatableExpense = state[index]
      const updatedItem = {...updatableExpense, ...action.payload.data}
      const updatedExpenses = [...state]
      updatedExpenses[index] = updatedItem
      return updatedExpenses
    case "DELETE":
      return state.filter(o => o.id !== action.payload)
    default:
      return state
  }
}

function ExpensesContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, [])

  function addExpense(expenseDate) {
    dispatch({type: "ADD", payload: expenseDate})
  }

  function setExpense(expenses) {
    dispatch({type: "SET", payload: expenses})
  }

  function updateExpense(id, expenseData) {
    dispatch({type: "UPDATE", payload: {id: id, data: expenseData}})
  }

  function deleteExpense(id) {
    dispatch({type: "DELETE", payload: id})
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpense: setExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense
  }

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider