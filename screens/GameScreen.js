import {Text, View, StyleSheet, Alert, FlatList, useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import Colors from "../constants/colors";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude, existingNumbers = []) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        if (existingNumbers.includes(rndNum)) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return rndNum
        }
    }
}

let min = 1
let max = 100

export default function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber, [])
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    const {width, height} = useWindowDimensions()

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess])
    useEffect(() => {
        min = 1
        max = 100
    }, [])

    function nextGuessHandler(direction = 'lower') { // lower - higher
        if (
            (direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert(
                "Don't lie", "You know that this is wrong...",
                [{text: 'Sorry!', style: 'cancel'}])
            return
        }
        if (direction === 'lower') {
            max = currentGuess + 1
        }
        if (direction === 'higher') {
            min = currentGuess
        }

        let newRandomNumber = generateRandomBetween(min, max, currentGuess, guessRounds)

        setCurrentGuess(newRandomNumber)
        setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds])
    }

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={style.subtitle}>Higher or Lower</InstructionText>
            <View style={style.buttons}>
                <View style={style.button}>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                        <AntDesign name="minus" size={16} color={Colors.white}/>
                    </PrimaryButton>
                </View>
                <View style={style.button}>
                    <PrimaryButton onPress={() => nextGuessHandler('higher')}>
                        <AntDesign name="plus" size={16} color={Colors.white}/>
                    </PrimaryButton>
                </View>
            </View>
        </Card>
    </>

    if (width > 500) {
        content = <>
            <View style={style.buttons}>
                <View style={style.button}>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                        <AntDesign name="minus" size={16} color={Colors.white}/>
                    </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={style.button}>
                    <PrimaryButton onPress={() => nextGuessHandler('higher')}>
                        <AntDesign name="plus" size={16} color={Colors.white}/>
                    </PrimaryButton>
                </View>

            </View>
        </>
    }

    return <View style={style.screen}>
        <Title>Opponent's Guess</Title>
        {content}
        <View style={style.list}>
            <FlatList data={guessRounds}
                      renderItem={({item, index}) => <GuessLogItem guess={item}
                                                                   t roundNumber={guessRounds.length - index}/>}
                      keyExtractor={(item) => item}
            />
        </View>
    </View>
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15
    },
    subtitle: {
        marginBottom: 12
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button: {
        flex: 1
    },
    list: {
        flex: 1,
        padding: 16
    }
})