import AuthContent from '../components/Auth/AuthContent';
import {login} from "../util/auth";
import {useContext, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import {AuthContext} from "../store/auth-context";

function LoginScreen() {
  const [loading, setLoading] = useState(false)
  const authCtx = useContext(AuthContext)

  async function loginHandler({email, password}) {
    setLoading(true)
    try {
      const token = await login(email, password)
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert('Authentication Failed', "You can't log in please try again")
      setLoading(false)
    }


  }

  if (loading) {
    return <LoadingOverlay message="Logging in..."/>
  } else {
    return <AuthContent isLogin onAuthenticate={loginHandler}/>;
  }
}

export default LoginScreen;
