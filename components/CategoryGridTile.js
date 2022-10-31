import {Pressable, Text, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

function CategoryGridTile({id, title, color}) {
    const navigation = useNavigation()

    function pressHandler() {
        navigation.navigate('MealsOverview', {
            categoryId: id
        })
    }

    return <View style={style.bigBox}>
        <Pressable style={({pressed}) => [style.button, pressed && style.buttonPressed]}
                   onPress={pressHandler}
        >

            <View style={[style.smallBox, {backgroundColor: color}]}>
                <Text style={style.text}>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
}

const style = StyleSheet.create({
    bigBox: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: .25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: "hidden"
    },
    smallBox: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: "center"
    },
    button: {
        flex: 1
    },
    buttonPressed: {
      opacity: .5
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default CategoryGridTile