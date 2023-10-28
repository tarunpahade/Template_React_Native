import * as React from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Touchable, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, Padding, FontSize, FontFamily } from "./Styles";
import ExerciseTitle from "../../components/exercise/ExerciseCard";
import axios from "axios";
import { useEffect, useState } from "react";
import DropdownFilter from "../../components/exercise/DropDown";

const data = ["abductors", "abs", "adductors", "biceps", "calves", "cardiovascular system", "delts", "forearms", "glutes", "hamstrings", "lats", "levator scapulae", "pectorals", "quads", "serratus anterior", "spine", "traps", "triceps", "upper back"]
const categories = {
  back: ["spine", "upper back", "lats","levator scapulae"],
  bicep: ["biceps","forearms"],
  tricep: ["triceps"],
  shoulder: ["delts", "pectorals"],
  legs: ["abductors", "adductors", "calves", "hamstrings", "quads","glutes"],
  chest: ["abs", "cardiovascular system", "serratus anterior"]
};

interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}



const ExercisePage = ({ route }: any) => {
  const [exerciseData, setexerciseData] = useState<Exercise[]>([{
    bodyPart: "upper legs",
    equipment: "assisted",
    gifUrl: "https://api.exercisedb.io/image/Wlbr0vnryIIhFL",
    id: "0016",
    name: "assisted prone hamstring",
    target: "hamstrings",
  }])
  const [main, setMain] = useState<Exercise[]>([{
    bodyPart: "upper legs",
    equipment: "assisted",
    gifUrl: "https://api.exercisedb.io/image/Wlbr0vnryIIhFL",
    id: "0016",
    name: "assisted prone hamstring",
    target: "hamstrings",
  }])
  const [loading, setloading] = useState(true)
  const { exercise } = route.params;
  const [selectedOption, setSelectedOption] = useState<string>('All');
  const [search, setsearch] = useState('')
  const handleFilter = (option: string) => {
    setSelectedOption(option);
    if (option === 'All') {
      // If 'All' is selected, show all exercises
      setexerciseData(exerciseData);
    } else {
      // Filter exercises based on the selected option
      const filteredExercises = exerciseData.filter((exercise: { equipment: string; }) => exercise.equipment === option);
      setexerciseData(filteredExercises);
    }
  };

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/` + exercise, {

          headers: {
            'X-RapidAPI-Key': '790e55a731msha0db3ffc5116a62p146a50jsna4961ac7f0e6',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          },
        });
        console.log(response.data.length);
        setexerciseData(response.data)
        setMain(response.data)
        // setImageUrl(response.data[0].gifUrl)
        // console.log(response.data[0]);

        setloading(false)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }
  const filterExerciseData = () => {
    const filteredData = main.filter((exercise) =>
      exercise.name.toLowerCase().includes(search.toLowerCase())
    );
    setexerciseData(filteredData);
  };
  return (
    <LinearGradient
      style={styles.exercisePage}
      locations={[0, 1]}
      colors={["rgba(255, 177, 132, 0.6)", "rgba(215, 159, 129, 0.6)"]}
    >
      <View style={{backgroundColor:'#fff'}}>
      <TextInput
        style={[styles.searchBar, styles.barFlexBox]}
        placeholder="Search"
        placeholderTextColor="#c4c4c4"
      value={search}
      onChangeText={(text) => {
        setsearch(text);
        filterExerciseData();
      }}
      />
      <Text style={[styles.exercises, styles.warmUpFlexBox]}>Exercises</Text>
      <View style={{
        top: 76,

        right: 16,
        position: "absolute"
      }}>

        <DropdownFilter handleFilter={handleFilter} selectedOption={selectedOption} />

      </View>

      <View style={styles.container}>
        <FlatList
          data={exerciseData}
          renderItem={({ item }) => {
            return <ExerciseTitle dataObj={item}  fromRoutiene={false}></ExerciseTitle>;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>

    </LinearGradient >
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    left: 0,
    position: "absolute",
  },
  container: {
    // flex: 1, // Ensure the container takes up the entire available space

    position: 'relative',
    marginTop: 109,
    height: '95%',
    marginLeft: 10
  },
  warmUpFlexBox: {
    textAlign: "left",

  },
  statusFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  minsTypo: {
    marginLeft: 12,
    fontSize: 12,
    textAlign: "left",
    fontWeight: "700",
  },
  taglinePosition: {
    left: 19,
    position: "absolute",
  },
  minutesClr: {
    color: Color.colorSilver,
    textAlign: "left",
  },
  menuIcon1Layout: {
    width: 374,
    position: "absolute",
  },
  exerciseLayout: {
    height: 71,
    width: 374,
    left: 0,
    position: "absolute",
  },
  cardLayout2: {
    height: 68,
    width: 68,
    top: 3,
    left: 0,
  },
  cardLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  menuIcon: {
    top: 25,
    left: '90%',
    width: 6,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  mainImageIcon: {
    top: 0,
    width: '100%',
    height: '43%',
    paddingTop: 10
  },
  exercises: {
    top: 83,
    fontSize: 19,
    width: 95,
    height: 25,
    fontWeight: "700",
    color: Color.colorGray,
    left: 19,
    position: "absolute",
  },
  
  searchBar: {
    marginLeft: -187,
    top: 33,
    left: 200,
    backgroundColor: "#f5f5f5",
    height: 40,
    paddingHorizontal: 30,
    paddingVertical: 0,
    alignItems: "center",
  borderRadius:12,
    fontSize: FontSize.size_base,
    width: "90%",
  },
  barFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  iconRunning: {
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  running: {
    color: Color.colorCoral,
  },
  statusDuration: {
    left: 163,
    backgroundColor: Color.colorAntiquewhite_200,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    top: 125,

    alignItems: "center",
  },
  statusDuration3: {
    left: 193,
    backgroundColor: Color.colorAntiquewhite_100,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    top: 125,

    alignItems: "center",
  },
  mins: {
    color: Color.colorDeepskyblue,
  },
  statusDuration1: {
    backgroundColor: Color.colorAliceblue,
    left: 20,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    top: 125,
    alignItems: "center",
  },
  dragOverlayPrototypingChild: {
    borderRadius: 10,
    backgroundColor: Color.colorSilver,
    height: 6,
    width: 60,
  },
  dragOverlayPrototyping: {
    top: 9,
    left: '45%',
    height: 3,
    justifyContent: "center",
    width: 12,
  },
  warmUp: {
    fontSize: 18,
    fontWeight: "800",
  },
  warmUpProperlyContainer: {
    lineHeight: 21,
    marginTop: 10,
    fontSize: FontSize.size_smi,
    width: '80%',
  },
  tagline: {
    top: 32,
    height: 81,
    width: '100%',
  },
  exercise1: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.colorGray,
  },
  minutes: {
    fontSize: FontSize.size_smi,
    fontWeight: "500",

    marginTop: 5,
  },
  exercise1Parent: {
    top: 15,
    left: 89,
    position: "absolute",
  },
  playBtnIcon: {
    top: 10,
    left: 324,
    width: 50,
    height: 50,
    position: "absolute",
  },
  cardExerciseChild: {
    backgroundColor: Color.colorAntiquewhite_100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_mini,
    width: "100%",
  },
  cardExerciseItem: {
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_mini,
    width: "100%",
    overflow: "hidden",
  },
  cardExercise: {
    position: "absolute",
  },
  exerciseTitle: {
    top: -2,
  },
  cardExercise1: {
    position: "absolute",
    overflow: "hidden",
  },
  exerciseTitle1: {
    top: 84,
  },
  exerciseTitle2: {
    top: 170,
  },
  exerciseTitle3: {
    top: 256,
  },
  cardExercise4: {
    height: 68,
    width: 68,
    top: 3,
    left: 0,
    overflow: "hidden",
  },
  exerciseTitle4: {
    top: 342,
  },
  exerciseTitle5: {
    top: 428,
  },
  exerciseTitle6: {
    top: 514,
  },
  exerciseTitle7: {
    top: 600,
  },
  exerciseTitle8: {
    top: 686,
  },
  exerciseTitle9: {
    top: 772,
  },
  exerciseDetails: {
    top: 218,
    height: 335,
    left: 20,
  },
  content: {
    top: '42%',
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: "#fff",
    width: '100%',
    height: '100%',
  },
  menuIcon1: {
    top: 22,
    left: 21,
    opacity: 0,
    height: 27,
  },
  exercisePage: {
    flex: 1,
    height: '100%',
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default ExercisePage;
