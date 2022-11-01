import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/fakeData";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useLayoutEffect, useState} from "react";
import IconButton from "../components/IconButton";

export default function MealDetailsScreen({route, navigation}) {
    const id = route.params.mealId
    const meal = MEALS.find(o => o.id === id)
    const {title, ingredients, steps, imageUrl, affordability, complexity, duration} = meal
    const [favorite, setFavorite] = useState(false)

    function headerPressedButton() {
        setFavorite(!favorite)
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton favorite={favorite} onPress={headerPressedButton}/>
        })
    }, [navigation, headerPressedButton])

    return <ScrollView style={style.box}>
        <Image style={style.image} source={{uri: imageUrl}}/>
        <Text style={style.title}>{title}</Text>
        <MealDetails affordability={affordability}
                     complexity={complexity}
                     duration={duration}/>

        <View style={style.list}>
            <Subtitle>Ingredients</Subtitle>
            <List data={ingredients}/>
        </View>

        <View style={style.list}>
            <Subtitle>Steps</Subtitle>
            <List data={steps}/>
        </View>

    </ScrollView>
}

const style = StyleSheet.create({
    box: {
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center"
    },
    list: {
        marginTop: 20
    }
})