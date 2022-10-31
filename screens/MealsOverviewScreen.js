import {Text, View, StyleSheet, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/fakeData";
import MealItem from "../components/MealItem";
import {useLayoutEffect} from "react";

export default function MealsOverviewScreen({route, navigation}) {
    const {categoryId} = route.params
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(o => o.id === categoryId).title
        navigation.setOptions({title: categoryTitle})

    }, [categoryId, navigation])

    const displayedMeals = MEALS.filter(o => {
        return o.categoryIds.indexOf(categoryId) >= 0
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
