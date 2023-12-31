import { Image } from "expo-image";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {styles} from './authStyles'
const ForgetPassword = ({navigation}:any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Handle signup logic here, e.g., sending data to your backend server.

    // For this example, we'll simply log the input.
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={{borderWidth:0.2,borderRadius:18}}>
        <TouchableOpacity  onPress={()=>navigation.goBack()}>
        <Image
         
          source={require("../../assets/ionarrowback.png")}
          style={{ tintColor: "#000", width: 12, height: 12 ,margin:7 }}
        />
        </TouchableOpacity>
       
        </View>
        <Text style={[styles.subHeader,{marginTop:10,fontSize:15}]}>Need Help</Text>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.title}>Forget Password</Text>
          <Text style={styles.subHeader}>
            Fill The Details to sign in to account{" "}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
        </View>
       
      </View>
    </View>
  );
};


export default ForgetPassword;
