import {Platform, StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

function Title({children}) {
    return <Text style={style.title}>{children}</Text>
}

const style = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 25,
        fontWeight: "bold",
        color: Colors.white,
        textAlign: "center",
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: Colors.white,
        padding: 12
    }
})

export default Title