import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import axios from 'axios'
import { useNavigation } from '@react-navigation/core';
const Exercise = () => {

  const [exerciseData, setExerciseData] = useState(['']);
  const navigation: any = useNavigation();
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
          headers: {
            'X-RapidAPI-Key': '790e55a731msha0db3ffc5116a62p146a50jsna4961ac7f0e6',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        };
        //    const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
        //   headers: {
        //     'X-RapidAPI-Key': '790e55a731msha0db3ffc5116a62p146a50jsna4961ac7f0e6',
        //     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        //   },
        // });
        const data2 = [
          "back",
          "cardio",
          "chest",
          "lower arms",
          "lower legs",
          "neck",
          "shoulders",
          "upper arms",
          "upper legs",
          "waist",
        ]
        const data = ["abductors", "abs", "adductors", "biceps", "calves", "cardiovascular system", "delts", "forearms", "glutes", "hamstrings", "lats", "levator scapulae", "pectorals", "quads", "serratus anterior", "spine", "traps", "triceps", "upper back"]
        const stringsToRemove = ["serratus anterior", "levator scapulae", "cardiovascular system", "adductors"];

        const filteredData = data.filter((item: any) => !stringsToRemove.includes(item));
        setExerciseData(data2);
        
        // const biceps = response.data.filter((x: any) => x.target === 'biceps')
        // setbicep(biceps)
        // const triceps = response.data.filter((x: any) => x.target === 'triceps')
        // settricep(triceps)

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('ExerciseDetails', { exercise: item })} style={styles.groupParent} activeOpacity={0.2}>
      <View style={styles.frameLayout}>
        <Image style={styles.frameLayout1} source={require("../assets/group-454.png")} />
        <Text style={[styles.letsGoTypo, styles.workout]}>{capitalizeFirstLetter(item)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={[styles.categories, { justifyContent: 'space-between' }]}>

        <Text style={[styles.categories1]}>Select Workout</Text>

        <FlatList
          data={exerciseData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
          numColumns={3}
        />

      </View>
    </View>


  )
}


const styles = StyleSheet.create({
  categories1: {
    textAlign: 'center',
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_400,

  },
  categories: {

    padding: 10,
    marginTop: 60,
    height: '100%',

  },


  flatList: {
    marginTop: 10,

    height: '50%'
  },
  groupParent: {
    width: '100%',
    paddingTop: 15,
    flex: 1,
    paddingHorizontal: 5,
    textAlign: 'center'
  },
  frameLayout: {
    flexDirection: 'column',
    alignItems: 'center', // Center the items vertically
    paddingVertical: 0, // Remove padding
    textAlign: 'center'

  },
  frameLayout1: {
    height: 45,
    width: 45,
    backgroundColor: "#eee"
  },
  workout: {
    color: Color.colorGray_200,
    marginTop: 5, // Add margin between image and text
  },
  letsGoTypo: {
    fontSize: 13,

    fontFamily: FontFamily.droidSans,
    fontWeight: "400",
    padding: 3,
    textAlign: 'center'

  },
  hoursTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.droidSans,
  },


  //new button
  workoutParent: {
    marginTop: 13,
  },

});



export default Exercise