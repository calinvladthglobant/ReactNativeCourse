import {Alert, Image, StyleSheet, Text, View} from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import {getCurrentPositionAsync, useForegroundPermissions} from "expo-location";
import {PermissionStatus} from "expo-image-picker";
import {useEffect, useState} from "react";
import {getAddress, getMapPreview} from "../../util/location";
import {useIsFocused, useNavigation, useRoute} from "@react-navigation/native";

export default function LocationPicker({onPickLocation}) {
    const [pickedLocation, setPickedLocation] = useState()

    const navigation = useNavigation()
    const route = useRoute()
    const isFocused = useIsFocused()

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

    useEffect(() => {
        if (isFocused && route.params) {
            const mapPickedLocation = route.params && {
                lat: route.params.pickedLat,
                lng: route.params.pickedLng,
            }

            if (mapPickedLocation) {
                setPickedLocation(mapPickedLocation)

            }
        }
    }, [route, isFocused])

    useEffect(() => {
        (async function handleLocation() {

            if (pickedLocation) {
                const address = await getAddress(pickedLocation.lat, pickedLocation.lng)
                onPickLocation({...pickedLocation, address: address})
            }

        })()
    }, [pickedLocation, onPickLocation])

    async function verifyPermission() {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission()
            return permissionResponse.granted
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient permissions', 'Grant location permissions to use the app')
            return false
        }

        return true
    }

    async function getLocationHandler() {
        const hasPermission = await verifyPermission()
        if (!hasPermission) {
            return
        }
        const location = await getCurrentPositionAsync()
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })

    }

    function pickOnMapHandler() {
        navigation.navigate('Map')
    }

    let locationPreview = <Text>No location preview</Text>

    if (pickedLocation) {
        locationPreview =
            <Image style={styles.image} source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}}/>
    }

    return <View style={styles.box}>
        <View style={styles.mapPreview}>
            {locationPreview}
        </View>
        <View style={styles.actions}>
            <OutlinedButton icon="location" onPress={getLocationHandler}>Locate User</OutlinedButton>
            <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>
        </View>
    </View>
}

const styles = StyleSheet.create({
    box: {
        marginTop: 14
    },
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})