import {Image, Pressable, StyleSheet, Text, View} from "react-native";

export default function PlaceItem({place, onSelect}) {
    console.log('W: ', place)
    return <Pressable style={({pressed}) => [pressed && styles.pressed, styles.item]} onSelect={onSelect}>
        <Image style={styles.image} source={{uri: place.image}}/>
        <View style={styles.info}>
            <Text style={styles.title}>{place.title}</Text>
            <Text style={styles.address}>{place.address}</Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 12,
        borderWidth: 1,
        borderColor: 'black'
    },
    pressed: {
        opacity: .7
    },
    image: {
        flex: 1,
        height: 100
    },
    info: {
        flex: 2,
        padding: 12
    },
    title: {
        fontWeight: 'bold'
    },
    address: {
        fontSize: 12
    }
})