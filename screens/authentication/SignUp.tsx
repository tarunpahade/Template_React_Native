import { Image } from "expo-image";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./authStyles";
import { useNewAccountMutation } from "../../store/apiSlicer";
import { useDispatch } from "react-redux";
import { accountSlice } from "../../store/authentication";

export const SignupScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [newAccount, { data, error, isLoading }] = useNewAccountMutation();
  const dispatch = useDispatch();

  const handleSignup = async () => {
    console.log("Email:", email);
    console.log("Password:", password);
    const otp = Math.floor(Math.random() * 10000)
    const result: any = await newAccount({ email, password, otp , idVerified: false});
    console.log(result, "this is result");
    if (result.data.status === "Ok") {
      alert("Account Created successfully");
      setAccount({ email, password });
      navigation.navigate("Verification", { otp: otp });
    }
  };

  const setAccount = (data: any) => {
    dispatch(accountSlice.actions.setAccount(data));
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={{ borderWidth: 0.2, borderRadius: 18 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/ionarrowback.png")}
              style={{ tintColor: "#000", width: 12, height: 12, margin: 7 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.subHeader, { marginTop: 10, fontSize: 15 }]}>
          Need Help
        </Text>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subHeader}>
            Fill The Details to create a new account{" "}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
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
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.btnText}>Sign Up</Text>
            )

            }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
