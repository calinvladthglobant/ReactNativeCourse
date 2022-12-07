import {FlatList, StyleSheet, Text, View} from "react-native";
import PlaceItem from "./PlaceItem";
import {useNavigation} from "@react-navigation/native";

export default function PlacesList({places}) {
    const navigation = useNavigation()

    function selectPlaceHandler(id) {
        console.log('AAA: ', id)
        navigation.navigate('PlaceDetails', {placeId: id})
    }

    if (!places || places.length === 0) {
        return <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>No place added yet</Text>
        </View>
    }

    return <FlatList data={places} keyExtractor={(item) => item.id} renderItem={({item}) => <PlaceItem place={item} onSelect={selectPlaceHandler}/>}/>
}

const styles = StyleSheet.create({
    list: {
        margin: 24
    },
    fallbackContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fallbackText: {
        fontSize: 16
    }
})