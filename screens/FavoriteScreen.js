import {Text} from "react-native";
import MealsList from "../components/MealsList/MealsList";
import {useContext} from "react";
import {FavoritesContext} from "../store/context/favorites";
import {MEALS} from "../data/fakeData";

export default function FavoriteScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext)
    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id)  )

    return favoriteMeals.length > 0 ? <MealsList data={favoriteMeals}/> : <Text>No favorite meals</Text>
}