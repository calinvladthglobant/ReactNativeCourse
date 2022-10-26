import {Text, View, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({children}) {
    return <View style={style.container}>
        <Text style={style.numberText}>
            {children}
        </Text>
    </View>
}

const deviceWidth = Dimensions.get('window').width

const style = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24 ,
        margin: deviceWidth < 380 ? 12 : 24 ,
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