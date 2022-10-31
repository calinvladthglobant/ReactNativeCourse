import {Text, View, StyleSheet} from "react-native";

export default function MealDetails({duration, complexity, affordability}) {
    return <View style={style.details}>
        <Text style={style.detailsItem}>{duration}m</Text>
        <Text style={style.detailsItem}>{complexity.toUpperCase()}</Text>
        <Text style={style.detailsItem}>{affordability.toUpperCase()}</Text>
    </View>
}

const style = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    detailsItem: {
        marginHorizontal: 8,
        fontSize: 12
    }
})