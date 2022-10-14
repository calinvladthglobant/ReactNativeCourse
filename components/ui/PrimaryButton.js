import {Pressable, Text, View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children, onPress}) {
    return <View style={style.container}>
        <Pressable style={({pressed}) => pressed ? [style.button, style.pressed] : style.button}
                   onPress={onPress}>
            <Text style={style.text}>{children}</Text>
        </Pressable>
    </View>

}

const style = StyleSheet.create({
    container: {
        margin: 4,
    },
    button: {
        backgroundColor: Colors.primary500,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})

export default PrimaryButton