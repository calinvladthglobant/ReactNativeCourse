import {Alert, Image, StyleSheet, Text, View} from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import {getCurrentPositionAsync, useForegroundPermissions} from "expo-location";
import {PermissionStatus} from "expo-image-picker";
import {useState} from "react";
import getMapPreview from "../../util/location";

export default function LocationPicker() {
    const [pickedLocation, setPickedLocation] = useState()
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

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
            <OutlinedButton icon="map">Pick on Map</OutlinedButton>
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