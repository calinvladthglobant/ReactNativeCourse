import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({roundNumber, guess}) {
    return <View style={style.box}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent's Guess: {guess}</Text>
    </View>
}

const style = StyleSheet.create({
    box: {
        width: '100%',
        elevation: 4,
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: .25,
        shadowRadius: 3
    },
    text: {
        fontFamily: 'open-sans'
    }
})

export default GuessLogItem