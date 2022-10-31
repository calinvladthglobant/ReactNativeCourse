import {Text, View, StyleSheet, FlatList} from "react-native";
import {useRoute} from "@react-navigation/native";
import {MEALS} from "../data/fakeData";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen() {
    const route = useRoute()
    const displayedMeals = MEALS.filter(o => {
        return o.categoryIds.indexOf(route.params.categoryId) >= 0
    })

    function renderMealItem(data) {
        return <MealItem data={data.item}/>
    }

    return <View style={style.box}>
        <FlatList data={displayedMeals} keyExtractor={o => o.id} renderItem={renderMealItem}/>
    </View>
}

const style = StyleSheet.create({
   box: {
       flex: 1,
       padding: 16
   }
})
