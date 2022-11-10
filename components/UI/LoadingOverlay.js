import {ActivityIndicator, StyleSheet, View} from "react-native";

export default function LoadingOverlay() {
   return <View style={style.container}>
     <ActivityIndicator size="large" color="black"/>
   </View>
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24
  }
})