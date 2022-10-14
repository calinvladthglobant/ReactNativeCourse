import {Text, View, StyleSheet, Image} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({roundsNumber=0, userNumber=0, onStartNewGame}) {
    return <View style={style.box}>
        <Title>Game is over</Title>
        <View style={style.boxImage}>
            <Image style={style.image} source={require('../assets/images/success.webp')}></Image>
        </View>
        <View>
            <Text style={style.text}>Your phone needed <Text style={style.textHighlight}>{roundsNumber}</Text> rounds to guess the number <Text style={style.textHighlight}>{userNumber}</Text></Text>
        </View>
        <View>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    </View>
}

const style = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,

    },
    boxImage: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 2,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontFamily: 'open-sans',
        fontSize: 23,
        textAlign: 'center',
        marginVertical: 20
    },
    textHighlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }

})