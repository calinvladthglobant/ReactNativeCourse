import {View, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return <View style={style.box}>
        {children}
    </View>
}

const deviceWidth = Dimensions.get('window').width

const style = StyleSheet.create({
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 25,
        padding: 15,
        backgroundColor: Colors.primary800,
        borderRadius: 5,
        elevation: 4, // For Android
        shadowColor: 'black', // For iOS
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        shadowOpacity: .25
    }
})

export default Card