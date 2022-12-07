import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useCallback, useState} from "react";
import Colors from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import Place from "../../models/place";

export default function PlaceForm({onCreatePlace}) {
    const [title, setTitle] = useState('')
    const [pickedLocation, setPickedLocation] = useState()
    const [selectedImage, setSelectedImage] = useState()

    function changeTitleHandler(data) {
        setTitle(data)
    }

    function takeImageHandler(imageUri) {
        setSelectedImage(imageUri)
    }

    const pickLocationHandler = useCallback((location) => {
        setPickedLocation(location)
    }, [])

    function savePlaceHandler() {
        const placeData = new Place(title, selectedImage, pickedLocation)
        onCreatePlace(placeData)
    }

    return <ScrollView>
        <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} onChangeText={changeTitleHandler} value={title}/>
            <ImagePicker onTakeImage={takeImageHandler}/>
            <LocationPicker onPickLocation={pickLocationHandler}/>
            <View style={styles.submitButton}>
                <Button onPress={savePlaceHandler}>Add Place</Button>
            </View>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 20
    },
    label: {
        fontWeight: "bold",
        marginBottom: 4
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 15,
        borderBottomColor: Colors.black,
        borderWidth: 1
    },
    submitButton: {
        marginTop: 10
    }
})