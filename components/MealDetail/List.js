import {StyleSheet, Text, View} from "react-native";

export default function List({data = []}) {
    return data.map(o => <View style={style.item} key={o}>
        <Text style={style.text}>{o}</Text>
    </View>)
}

const style = StyleSheet.create({
    item: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
    },
    text: {
        textAlign: "center"
    }
})