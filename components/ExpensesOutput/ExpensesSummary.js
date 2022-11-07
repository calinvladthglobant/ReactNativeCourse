import {Text, View, StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/styles";

export default function ExpensesSummary({expenses, periodName}) {
    const expenseSum = expenses.reduce((sum,expense) => {return sum + expense.amount}, 0)

    return <View style={style.container}>
        <Text style={style.period}>{periodName}</Text>
        <Text style={style.expense}>{expenseSum.toFixed(2)}</Text>
    </View>
}

const style = StyleSheet.create({
    container: {
        padding: 8,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: GlobalStyles.colors.black

    },
    period: {
        fontSize: 12
    },
    expense: {
        fontSize: 16,
        fontWeight: "bold"
    }
})