import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function App() {

    return <View style={style.container}>
        <StatusBar style="light"/>
        <Text>Hola!</Text>
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
