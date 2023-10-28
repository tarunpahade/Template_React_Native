import { Image } from "expo-image";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import {styles} from './authStyles'

const Verification = ({navigation,route}:any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { params } = route;
  const randomOtp = params?.otp || '';
console.log(randomOtp);

  const handleSignup = () => {
    console.log("Password:", password);
    if( password===JSON.stringify(randomOtp)){
      navigation.replace('Dashboard')

    } else {
      alert('Wrong Otp')
    } 
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


        <KeyboardAvoidingView behavior="padding" style={[styles.TitleContainer,{marginBottom:19}]}>
          <Text style={styles.title}>Verification</Text>
          <Text style={styles.subHeader}>
            We Have A Code To tarunpahade@gmail.com
          </Text>
        </KeyboardAvoidingView>
        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder=""
            maxLength={4}
            keyboardType="numeric"
            autoFocus
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export default Verification;
