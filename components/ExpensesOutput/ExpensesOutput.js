import {StyleSheet, View} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {GlobalStyles} from "../../constants/styles";

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
        date: new Date('2021-9-19')
    },
    {
        id: '4',
        description: 'backpack',
        amount: 99.99,
        date: new Date('2021-10-19')
    },
    {
        id: '5',
        description: 'tires',
        amount: 1099.99,
        date: new Date('2021-12-19')
    }
]

export default function ExpensesOutput({expenses, expensesPeriod}) {
    return <View style={style.container}>

        <ExpensesSummary expenses={DUMMY} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY}/>

    </View>
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.gray100
    },

})