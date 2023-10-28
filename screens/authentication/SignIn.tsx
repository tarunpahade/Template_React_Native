import { Image } from "expo-image";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingViewComponent,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./authStyles";

import { useDispatch } from "react-redux";
import { accountSlice } from "../../store/authentication";
import { useLoginMutation } from "../../store/apiSlicer";

const SignIn = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  const dispatch = useDispatch();
  const [login, { data, error, isLoading }] = useLoginMutation();

  const handleSignup = async () => {
    // Handle signup logic here, e.g., sending data to your backend server.
    setloading(true);
    // For this example, we'll simply log the input.
    console.log("Email:", email);
    console.log("Password:", password);
    const result: any = await login({ email: email, password: password });
    if (email.length === 0 || password.length === 0) {
      alert('Please Enter all Details')
    }
    if (result.error) {
      console.log("Error while logging in");
    } else if (result.data.data === "New User") {
      console.log("Navigate to registered screen");
      setUserNotFound(true);
      setloading(false);
    } else if (result.data.status === "Ok") {
      setAccount({ email, password });
      navigation.replace("Home");
    }
  };

  const handleCreateNew = () => {
    console.log("hiii");

    navigation.navigate("Sign Up");
  };

  const setAccount = (data: any) => {
    dispatch(accountSlice.actions.setAccount(data));
  };

  return (
    <View
      style={styles.container}>
        
      <View style={styles.nav}>
        <View style={{ borderWidth: 0.2, borderRadius: 18 }}>
          <Image
            source={require("../../assets/iconlylightoutlineprofile.png")}
            style={{ tintColor: "#000", width: 12, height: 12, margin: 7 }}
          />
        </View>
        <Text style={[styles.subHeader, { marginTop: 10, fontSize: 15 }]}>
          Need Help
        </Text>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subHeader}>
            Fill The Details to sign in to account{" "}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { marginTop: 5 }]}
            disableFullscreenUI={true}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.btnText}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={handleCreateNew}>
            <Text style={styles.subHeader}>Create a account </Text>
          </TouchableOpacity>

          <Text
            onPress={() => navigation.navigate("Forget Password")}
            style={styles.subHeader}
          >
            Forgot Password ?
          </Text>
        </View>

        {userNotFound ? <Text>User Not Found Please log In</Text> : null}
      </View>

    </View>
  );
};

export default SignIn;
