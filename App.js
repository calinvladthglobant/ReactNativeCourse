import {Alert, Button, Platform, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import * as Notifications from "expo-notifications";
import {useEffect} from "react";


export default function App() {

    useEffect(() => {
        (async function configurePushNotifications() {
            const {status} = await Notifications.getPermissionsAsync()
            let finalStatus = status

            if (finalStatus !== 'granted') {
                const {status} = await Notifications.requestPermissionsAsync()
                finalStatus = status
            }

            if (finalStatus !== 'granted') {
                Alert.alert('Permission Required', 'Push notifications need the appropriate permissions.')
                return
            }

            const pushTokenData = await Notifications.getExpoPushTokenAsync()
            console.log('PUSH TOKEN DATA: ', pushTokenData)

            // if (Platform.OS === 'android') {
            //     Notifications.setNotificationChannelAsync('default', {
            //         name: 'default',
            //         importance: Notifications.AndroidImportance.DEFAULT
            //     })
            // }
        })()
    }, [])

    useEffect(() => {
        const subscription1 = Notifications.addNotificationReceivedListener(notification => {
            const userName = notification.request.content.data.user
            console.log('NOTIFICATION RECEIVED', userName)
        })

        const subscription2 = Notifications.addNotificationResponseReceivedListener(response => {
            console.log('NOTIFICATION RESPONSE RECEIVED')
        })

        return () => {
            subscription1.remove()
            subscription2.remove()
        }
    }, [])

    function scheduleNotificationHandler() {
        // Notifications.requestPermissionsAsync()
        Notifications.scheduleNotificationAsync({
            content: {
                title: "Hola!!!",
                body: "Hola Body!!!",
                data: {
                    user: "ME"
                }
            },
            trigger: {
                seconds: 5
            }
        })
    }

    function sendPushNotificationHandler() {
        fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: '',
                title: 'Hola title',
                body: 'Hola body'
            })
        })
    }

    return <View style={style.container}>
        <StatusBar style="light"/>
        <Text>Hola!</Text>
        <Button title="Schedule Notification" onPress={sendPushNotificationHandler}/>
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
