import MealItem from "../MealItem";
import {FlatList, StyleSheet, View} from "react-native";

export default function MealsList({data}) {
    function renderMealItem(data) {
        return <MealItem data={data.item}/>
    }

    return <View style={style.box}>
        <FlatList data={data} keyExtractor={o => o.id} renderItem={renderMealItem}/>
    </View>
}

const style = StyleSheet.create({
    box: {
        flex: 1,
        padding: 16
    }
})