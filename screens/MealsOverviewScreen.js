import {Text, View, StyleSheet, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/fakeData";
import {useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({route, navigation}) {
    const {categoryId} = route.params
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(o => o.id === categoryId).title
        navigation.setOptions({title: categoryTitle})

    }, [categoryId, navigation])

    const displayedMeals = MEALS.filter(o => {
        return o.categoryIds.indexOf(categoryId) >= 0
    })

    return <MealsList data={displayedMeals}/>
}