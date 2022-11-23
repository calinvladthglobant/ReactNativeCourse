import {Pressable, StyleSheet, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../../constants/colors";

export default function OutlinedButton({onPress, icon, children}) {
    return <Pressable style={(pressed) => [styles.button, styles.pressed]} onPress={onPress}>
        <Ionicons name={icon} size={18} color="black"/>
        <Text>{children}</Text>
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
    }
})
