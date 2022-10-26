import {StyleSheet, Text, View} from 'react-native';
import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";

export default function App() {
    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }

    return <>
        <StatusBar style="light"/>
        <View style={style.container}>
            <Text>Hola!</Text>
        </View>
    </>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
