const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from 'react-redux';
import { store } from './store/store';


import {SignupScreen} from "./screens/authentication/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./screens/Homepage";
import { AuthContextProvider } from "./context/AuthContextProvider";
import SignIn from "./screens/authentication/SignIn";
import ForgetPassword from "./screens/authentication/forgetPassword";
import Verification from "./screens/authentication/Verification";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>

      <Provider store={store}>
      <AuthContextProvider>
        
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            {/* <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            /> */}
            
          
                <Stack.Screen
              name="Sign In"
              component={SignIn}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="Sign Up"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="Forget Password"
              component={ForgetPassword}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="Verification"
              component={Verification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Homepage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
      </AuthContextProvider>
      </Provider>
    </>
  );
};
export default App;

