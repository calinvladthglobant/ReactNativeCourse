import {StyleSheet, Text, View} from "react-native";

export default function Subtitle({children}) {
    return <View style={style.subtitleContainer}>
        <Text style={style.subtitle}>{children}</Text>
    </View>
}

const style = StyleSheet.create({
    subtitleContainer: {
        borderBottomColor: "#555555",
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 24
    },
    subtitle: {
        color: "#555555",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",

    }
})