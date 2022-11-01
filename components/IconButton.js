import {Pressable} from "react-native";
import {AntDesign} from "@expo/vector-icons";

export default function IconButton({favorite, onPress}) {

    return <Pressable onPress={onPress}>
        <AntDesign name={favorite ? 'star' : 'staro'} size={24} color="black"/>
    </Pressable>
}