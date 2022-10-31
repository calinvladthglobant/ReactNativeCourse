import {Image, Pressable, Text, View, StyleSheet} from "react-native";

export default function MealItem({data}) {
    const {title, imageUrl, duration, complexity, affordability} = data
    return <View style={style.box}>
        <Pressable style={({pressed}) => pressed && style.boxPressed}>
            <View style={style.innerBox}>
                <View>
                    <Image style={style.image} source={{uri: imageUrl}}/>
                    <Text style={style.title}>{title}</Text>
                </View>
                <View style={style.details}>
                    <Text style={style.detailsItem}>{duration}m</Text>
                    <Text style={style.detailsItem}>{complexity.toUpperCase()}</Text>
                    <Text style={style.detailsItem}>{affordability.toUpperCase()}</Text>
                </View>
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
    },
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