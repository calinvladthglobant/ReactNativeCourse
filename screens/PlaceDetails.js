import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import {useEffect, useState} from "react";
import {fetchPlaceDetails} from "../util/database";


export default function PlaceDetails({navigation, route}) {
    const selectedPlaceId = route.params.placeId
    const [place, setPlace] = useState()

    function showOnMapHandler() {
        navigation.navigate('Map', {
            lat: place.location.lat,
            lng: place.location.lng
        })
    }

    useEffect(() => {
        (async function loadPlaceData() {
            const data = await fetchPlaceDetails(selectedPlaceId)
            setPlace(data)
            navigation.setOptions({
                title: data.title
            })
        })()
    }, [selectedPlaceId])

    if (!place) {
        return <View>
            <Text>Loading ...</Text>
        </View>
    }

    return <ScrollView>
        <Image style={styles.image} source={{uri: place.image}}/>
        <View style={styles.locationContainer}>
            <View style={styles.addressContainer}>
                <Text style={styles.address}>{place.address}</Text>
            </View>
            <OutlinedButton icon="map" onPress={showOnMapHandler}>
                View on map
            </OutlinedButton>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
    image: {
        flex: 1,
        height: '35%',
        minHeight: 300,
        width: '100%'
    },
    locationContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    addressContainer: {
        padding: 20,
    },
    address: {
        textAlign: "center",
        fontWeight: "bold"
    }
})