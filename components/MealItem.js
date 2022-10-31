import {Image, Pressable, Text, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";

export default function MealItem({data}) {
    const {id, title, imageUrl, duration, complexity, affordability} = data
    const navigation = useNavigation()

    function pressHandler() {
         navigation.navigate('MealDetails', {
            mealId: id
        })
    }

    return <View style={style.box}>
        <Pressable style={({pressed}) => pressed && style.boxPressed} onPress={pressHandler}>
            <View style={style.innerBox}>
                <View>
                    <Image style={style.image} source={{uri: imageUrl}}/>
                    <Text style={style.title}>{title}</Text>
                </View>
                <MealDetails affordability={affordability} complexity={complexity} duration={duration}/>
            </View>
        </Pressable>

    </View>
}

const style = StyleSheet.create({
    box: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: .25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8
    },
    innerBox: {
        borderRadius: 8,
        overflow: "hidden"
    },
    boxPressed: {
        opacity: .75
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        margin: 8
    }
})