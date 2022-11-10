import axios from "axios";

const API = "https://reactnative-2c0f1-default-rtdb.firebaseio.com"

export async function fetchExpenses() {
  const response = await axios.get(`${API}/expenses.json`)
  const expenses = []

  for (const key in response.data) {
    const obj = {
      id: [key],
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    }
    expenses.push(obj)
  }

  return expenses
}

export async function storeExpense(data) {
  const response = await axios.post(`${API}/expenses.json`, data)
  return response.data.name
}

export async function updateExpense(id, data) {
  return await axios.put(`${API}/expenses/${id}.json`, data)
}

export async function deleteExpense(id) {
  return await axios.delete(`${API}/expenses/${id}.json`)
}