import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import {Text} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator()


export default function App() {
    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }

    const Drawer = createDrawerNavigator()

    function DrawerNavigator() {
        return <Drawer.Navigator>
            <Drawer.Screen name="Categories" component={CategoriesScreen}/>
            <Drawer.Screen name="Favorites" component={FavoriteScreen}/>
        </Drawer.Navigator>
    }

    return <>
        <StatusBar style={"dark"}/>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"MealsCategories"}>
                <Stack.Screen name={"MealsCategories"}
                              component={DrawerNavigator}
                              options={{headerShown: false}}/>
                <Stack.Screen name={"MealsOverview"}
                              component={MealsOverviewScreen}
                              options={{title: 'Overview', headerBackTitle: "Back"}}
                />
                <Stack.Screen name={"MealDetails"}
                              component={MealDetailsScreen}
                              options={{title: 'Details', headerBackTitle: "Back"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </>
}