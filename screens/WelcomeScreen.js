import { StyleSheet, Text, View } from 'react-native';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../store/auth-context";

function WelcomeScreen() {
  const [messages, setMessages] = useState([])
  const authCtx = useContext(AuthContext)

  useEffect(() => {
    axios.get(`https://reactnative-2c0f1-default-rtdb.firebaseio.com/message.json?auth=${authCtx.token}`)
      .then(response => setMessages(response.data))
  }, [])
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{messages}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
