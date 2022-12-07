import {Pressable, StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

export default function Button({children, onPress}) {
    return <Pressable style={({pressed}) => [pressed && styles.pressed, styles.button]} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.black
    },
    pressed: {
        opacity: .7
    },
    text: {
        textAlign: "center",
        color: "black"
    }
})