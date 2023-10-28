const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from 'react-redux';
import { store } from './store/store';


import Dashboard from "./screens/Dashboard";
import Training from "./screens/Training";
import {SignupScreen} from "./screens/authentication/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./screens/Homepage";
import Exerciese from "./screens/Exercise";
import ExercisePage from "./screens/exercise/ExerciseDetails";
import { SingleWorkout } from "./screens/exercise/SingleWorkout";
import Meditate from "./screens/meditate/Meditate";
import { AuthContextProvider } from "./context/AuthContextProvider";
import SignIn from "./screens/authentication/SignIn";
import ForgetPassword from "./screens/authentication/forgetPassword";
import Verification from "./screens/authentication/Verification";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Onboarding from "./screens/Onboarding";
import {Content}  from "./screens/navigation/Profile";

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
              name="Profile"
              component={Content}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="Verification"
              component={Verification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="Single Workout Page"
              component={SingleWorkout}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="Meditate"
              component={Meditate}
              options={{ headerShown: false }}
            />
          
            <Stack.Screen
              name="Training"
              component={Training}
              options={{ headerShown: false }}
            />
          
            
            <Stack.Screen
              name="Home"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Exercise"
              component={Exerciese}
              options={{ headerShown: false }}
            /><Stack.Screen
            name="ExerciseDetails"
            component={ExercisePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Drawer"
            component={ExercisePage}
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

