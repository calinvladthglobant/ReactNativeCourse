import {Alert, StyleSheet, Text, View} from "react-native";
import Input from "./Input";
import {useState} from "react";
import Button from "../UI/Button";
import {getFormattedDate} from "../../util/date";

export default function ExpenseForm({onCancel, onSubmit, submitButtonLabel, defaultValues}) {
  const [form, setForm] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true
    }
  })

  function inputHandler(key, value) {
    setForm(currentForm => {
      return {
        ...currentForm,
        [key]: {value: value, isValid: true}
      }
    })
  }

  function submitHandler() {
    const formData = {
      amount: +form.amount.value,
      date: new Date(form.date.value),
      description: form.description.value
    }

    const amountValid = !isNaN(formData.amount) && formData.amount > 0
    const dateValid = formData.date.toString() !== "Invalid Date"
    const descriptionValid = formData.description.trim().length > 0

    if (amountValid && dateValid && descriptionValid) {
      onSubmit(formData)
    } else {
      setForm(currentForm => {
        return {
          amount: {value: currentForm.amount.value, isValid: amountValid},
          date: {value: currentForm.date.value, isValid: dateValid},
          description: {value: currentForm.description.value, isValid: descriptionValid},
        }
      })
    }
  }


  return <>
    <View style={style.form}>
      <Text style={style.title}>Your Expense</Text>
      <View style={style.inputsRow}>
        <Input customStyle={style.rowInput} label="Amount" error={!form.amount.isValid} textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: inputHandler.bind(this, "amount"),
          value: form.amount.value,
        }}/>
        <Input customStyle={[style.rowInput]} error={!form.date.isValid} label="Date" textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: inputHandler.bind(this, "date"),
          value: form.date.value
        }}/>
      </View>
      <Input label="Description" error={!form.description.isValid} textInputConfig={{
        multiline: true,
        onChangeText: inputHandler.bind(this, "description"),
        value: form.description.value
      }}/>
    </View>

    <View style={style.buttonsContainer}>
      <View style={style.buttonContainer}>
        <Button onPress={onCancel}>Cancel</Button>
      </View>
      <View style={style.buttonContainer}>
        <Button mode="flat" onPress={submitHandler}>{submitButtonLabel}</Button>
      </View>
    </View>
  </>
}

const style = StyleSheet.create({
  form: {
    marginTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 24
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowInput: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 7
  },
})