import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";

export default function App() {
    const [userNumber, setUserNumber] = useState(undefined)
    const [gameOver, setGameOver] = useState(false)
    const [guessRounds, setGuessRounds] = useState(0)
    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber)
        setGameOver(false)
    }

    function gameOverHandler(rounds) {
        setGameOver(true)
        setGuessRounds(rounds)
    }

    function startNewGameHandler() {
        setUserNumber(null)
        setGameOver(false)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }

    if (gameOver) {
        screen =
            <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
    }

    return <>
        <StatusBar style="light"/>
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={style.container}>
            <ImageBackground source={require('./assets/images/root-bg.jpg')} resizeMode="cover" style={style.container}
                             imageStyle={style.image}>
                <SafeAreaView style={style.container}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    </>
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        opacity: .25
    }
});
