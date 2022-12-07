import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import IconButton from "./components/UI/IconButton";
import Map from "./screens/Map";
import {useEffect, useState} from "react";
import {init} from "./util/database";
import AppLoading from "expo-app-loading/build/AppLoadingNativeWrapper";
import PlaceDetails from "./screens/PlaceDetails";

const Stack = createNativeStackNavigator()

export default function App() {
    const [dbInit, setDbInit] = useState()

    useEffect(() => {
        init().then(() => setDbInit(true))
    }, [])

    if (!dbInit) {
        return <AppLoading/>
    }

  return <>
    <StatusBar style="dark"/>
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({navigation}) => ({
              headerRight: () => <IconButton icon="add" size={24} color="black"
                                             onPress={() => navigation.navigate('AddPlace')}/>
            }
          )}/>

        <Stack.Screen name="AddPlace" component={AddPlace}/>
        <Stack.Screen name="Map" component={Map}/>
        <Stack.Screen name="PlaceDetails" component={PlaceDetails}/>

      </Stack.Navigator>
    </NavigationContainer>
  </>
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
