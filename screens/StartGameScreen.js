import {Alert, Button, StyleSheet, Text, TextInput, View} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number', 'It should be betwteen 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            )
        } else {
            onPickNumber(chosenNumber)
        }
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    return <View style={style.rootContainer}>
        <Title>Guess my number</Title>
        <Card>
            <InstructionText>Enter a number</InstructionText>
        <TextInput style={style.input} maxLength="2" keyboardType={"number-pad"} autoCapitalize={"none"}
                   autoCorrect={false} value={enteredNumber} onChangeText={setEnteredNumber}/>
        <View style={style.buttons}>
            <View style={style.button}>
                <PrimaryButton onPress={() => resetInputHandler()}>Reset</PrimaryButton>
            </View>
            <View style={style.button}>
                <PrimaryButton onPress={() => confirmInputHandler()}>Confirm</PrimaryButton>
            </View>
        </View>
    </Card>
    </View>
}

const style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 25,
        padding: 15,
        backgroundColor: Colors.primary800,
        borderRadius: 5,
        elevation: 4, // For Android
        shadowColor: 'black', // For iOS
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        shadowOpacity: .25,
    },
    input: {
        width: 50,
        height: 50,
        fontSize: 30,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
    },
    buttons: {
        flexDirection: 'row'
    },
    button: {
        flex: 1
    }
})

export default StartGameScreen