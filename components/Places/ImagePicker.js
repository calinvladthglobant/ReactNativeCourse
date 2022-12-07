import {Alert, Button, Image, StyleSheet, Text, View} from "react-native";
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from "expo-image-picker";
import {useState} from "react";
import Colors from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

export default function ImagePicker({onTakeImage}) {
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions()
    const [pickedImage, setPickedImage] = useState()

    async function verifyPermission() {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission()
            return permissionResponse.granted
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient permissions', 'Grant permissions to use the app')
            return false
        }

        return true
    }


    async function takeImageHandler() {
        const hasPermissions = await verifyPermission()
        if (!hasPermissions) {
            return
        }
        const image = await launchCameraAsync({allowsEditing: true, aspect: [16, 9], quality: .5})
        setPickedImage(image.uri)
        onTakeImage(image.uri)
    }

    let imagePreview = <Text>No image taken yet</Text>

    if (pickedImage) {
        imagePreview = <Image style={styles.image} source={{uri: pickedImage}}/>
    }

    return <View>
        <View style={styles.imagePreview}>{imagePreview}</View>
        <OutlinedButton onPress={takeImageHandler}>{pickedImage ? 'Retake Image' : 'Take Image'}</OutlinedButton>
    </View>
}

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.gray700,
        marginBottom: 14
    },
    image: {
        width: "100%",
        height: "100%"
    }
})