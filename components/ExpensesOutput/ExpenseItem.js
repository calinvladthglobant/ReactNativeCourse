import {Pressable, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";

export default function ExpenseItem({description, amount, date}) {
    return <Pressable>
        <View style={style.item}>
            <View>
                <Text style={style.description}>{description}</Text>
                <Text>{date.toString()}</Text>
            </View>
            <View style={style.amountContainer}>
                <Text style={style.amount}>{amount}</Text>
            </View>
        </View>
    </Pressable>
}

const style = StyleSheet.create({
    item: {
        padding: 12,
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6,
        backgroundColor: GlobalStyles.colors.white
    },
    description: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    amount: {
        fontWeight: "bold"
    }
})