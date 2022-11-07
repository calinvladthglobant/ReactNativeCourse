import {FlatList, Text} from "react-native";
import ExpenseItem from "./ExpenseItem";

function RenderExpenseItem(data) {
    return <ExpenseItem {...data.item}/>
}

export default function ExpensesList({expenses}) {
    return <FlatList data={expenses}
                     renderItem={RenderExpenseItem}
                     keyExtractor={item => item.id}
    />
}