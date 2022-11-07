import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AntDesign} from "@expo/vector-icons";

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpensesOverview() {
    return <BottomTabs.Navigator>
        <BottomTabs.Screen name="Recent Expenses"
                           component={RecentExpenses}
                           options={{
                               title: "Recent Expenses",
                               tabBarLabel: "Recent",
                               tabBarIcon: ({color, size}) => <AntDesign name="hourglass" size={size} color={color} />
                           }}
        />
        <BottomTabs.Screen name="All Expenses"
                           component={AllExpenses}
                           options={{
                               title: "All Expenses",
                               tabBarLabel: "All",
                               tabBarIcon: ({color, size}) => <AntDesign name="calendar" size={size} color={color} />
                           }}
        />
    </BottomTabs.Navigator>
}

export default function App() {

    return <>
        <StatusBar style="light"/>
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Expenses Overview" component={ExpensesOverview} options={{headerShown: false}}/>
                <Stack.Screen name="Manage Expenses" component={ManageExpenses}/>
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
