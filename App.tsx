const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Dashboard from "./screens/Dashboard";
import Training from "./screens/Training";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Onboarding from "./screens/Onboarding";
import Homepage from "./screens/Homepage";
import Exerciese from "./screens/Exercise";
import ExercisePage from "./screens/exercise/ExerciseDetails";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            {/* <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
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
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
