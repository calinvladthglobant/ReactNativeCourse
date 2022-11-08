import {createContext, useReducer} from "react";

const DUMMY = [
  {
    id: '1',
    description: 'shoes',
    amount: 39.99,
    date: new Date('2021-12-19')
  },
  {
    id: '2',
    description: 'jacket',
    amount: 49.99,
    date: new Date('2021-12-18')
  },
  {
    id: '3',
    description: 'pillow',
    amount: 69.99,
    date: new Date('2021-09-19')
  },
  {
    id: '4',
    description: 'backpack',
    amount: 99.99,
    date: new Date('2022-11-06')
  },
  {
    id: '5',
    description: 'tires',
    amount: 1099.99,
    date: new Date('2022-11-07')
  }
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {
  },
  deleteExpense: (id) => {
  },
  updateExpense: (id, {description, amount, date}) => {
  }
})

export function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = Date.now()
      return [{...action.payload, id: id}, ...state]
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
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY)

  function addExpense(expenseDate) {
    dispatch({type: "ADD", payload: expenseDate})
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
    updateExpense: updateExpense,
    deleteExpense: deleteExpense
  }

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider