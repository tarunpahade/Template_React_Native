import * as React from "react";
import { Text, StyleSheet, View, Pressable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

interface cardProps {
    name:string,
    gifUrl:string,
    setImageUrl:any,
    setHeader:any
}
const ExerciseTitle = ({name,gifUrl,setImageUrl,setHeader}:cardProps) => {

    function truncateString(text: string, maxLength: number) {
        if (text.length <= maxLength) {
          return text;
        } else {
          return text.slice(0, maxLength) + '...';
        }
      }
    return (
     
        <View style={styles.exerciseTitle}>
            <View style={styles.exercise1Parent}>
                <Text style={styles.exercise1}>{truncateString(name, 21)}</Text>
                <Text style={styles.minutes}>02.30 Minutes</Text>
            </View>
            <TouchableOpacity onPress={()=>{setImageUrl(gifUrl)
            setHeader(name)
        }
            }>
            <Image style={styles.playBtnIcon1}   source={require('../../assets/play-btn.png')} />
            </TouchableOpacity>
            <View style={styles.cardExercise1}>
                <View style={[styles.cardExerciseChild, styles.cardPosition]} />
                <Image style={[styles.cardExerciseItem, styles.cardPosition]}   source={{uri:gifUrl}} />
            </View>
        </View>
        
              );
};

const styles = StyleSheet.create({
    cardPosition: {
        borderRadius: 15,
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
        width: "100%"
    },
    exercise1: {
        fontSize: 13,
        fontWeight: "600",
        color: "#2b2b2b",
        textAlign: "left"
    },
    minutes: {
        fontSize: 13,
        fontWeight: "500",
        color: "#c4c4c4",
        marginTop: 5,
        textAlign: "left"
    },
    exercise1Parent: {
        top: 15,
        left: 89,
        position: "absolute"
    },
    playBtnIcon1: {
        top: 10,
        left: 224,
        width: 43,
        height: 43,
        position: "absolute"
    },
    cardExerciseChild: {
        backgroundColor: "#fbe3d4"
    },
    cardExerciseItem: {
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%"
    },
    cardExercise1: {
        top: 3,
        left: 0,
        width: 68,
        height: 68,
        position: "absolute"
    },
    exerciseTitle: {
        flex: 1,
        height: 71,
        marginTop:5,
        width: "100%"
    }
});

export default ExerciseTitle;
