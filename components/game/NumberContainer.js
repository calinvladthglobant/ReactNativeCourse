import {Text, View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({children}) {
    return <View style={style.container}>
        <Text style={style.numberText}>
            {children}
        </Text>
    </View>
}

const style = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 25,
        margin: 25,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        fontSize: 35,
        color: Colors.accent500
    }
})