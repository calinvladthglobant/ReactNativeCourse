import {Text, View, StyleSheet, Image, Dimensions, ScrollView, useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({roundsNumber=0, userNumber=0, onStartNewGame}) {
    const {width, height} = useWindowDimensions()

    let imageSize = 300
    if (width < 380) imageSize = 150
    if (height < 400) imageSize = 80

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }


    return <ScrollView style={style.screen}>
        <View style={style.box}>
        <Title>Game is over</Title>
        <View style={[style.boxImage, imageStyle]}>
            <Image style={style.image} source={require('../assets/images/success.webp')}></Image>
        </View>
        <View>
            <Text style={style.text}>Your phone needed <Text style={style.textHighlight}>{roundsNumber}</Text> rounds to guess the number <Text style={style.textHighlight}>{userNumber}</Text></Text>
        </View>
        <View>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    </View>
        </ScrollView>
}

// const deviceWidth = Dimensions.get('window').width

const style = StyleSheet.create({
    screen: {
        flex: 1
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,

    },
    boxImage: {
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
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