import AuthContent from '../components/Auth/AuthContent';
import {createUser} from "../util/auth";
import {useContext, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import {AuthContext} from "../store/auth-context";

function SignupScreen() {
  const [loading, setLoading] = useState(false)
  const authCtx = useContext(AuthContext)

  async function signupHandler({email, password}) {
    setLoading(true)
    try {
      const token = await createUser(email, password)
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert('Authentication Failed', "Account not created, please try again")
      setLoading(false)
    }
  }

  if (loading) {
    return <LoadingOverlay message="Creating user..."/>
  } else {
    return <AuthContent onAuthenticate={signupHandler}/>;
  }


}

export default SignupScreen;
