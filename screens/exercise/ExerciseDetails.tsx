import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, FlatList, LogBox, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, Padding, FontSize } from "./Styles";
import ExerciseTitle from "../../components/exercise/ExerciseCard";
import axios from "axios";
import { useEffect, useState } from "react";

interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}



const ExercisePage = ({ route }: any) => {
  const [exerciseData, setexerciseData]=useState<Exercise[]>([{
    bodyPart: "upper legs",
    equipment: "assisted",
    gifUrl: "https://api.exercisedb.io/image/Wlbr0vnryIIhFL",
    id: "0016",
    name: "assisted prone hamstring",
    target: "hamstrings",
  }])
  const [imageUrl, setImageUrl] = useState('"https://api.exercisedb.io/image/Wlbr0vnryIIhFL')
  const [loading, setloading] = useState(true)
  const { exercise } = route.params;
  const [header,setHeader]=useState(exercise)
  console.log(exercise);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/target/` + exercise, {
          params: {
            limit: 50, // Specify the number of exercises you want (in this case, 50)
          },
          headers: {
            'X-RapidAPI-Key': '790e55a731msha0db3ffc5116a62p146a50jsna4961ac7f0e6',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          },
        });
        console.log(response.data.length);
        setexerciseData(response.data)
        setImageUrl(response.data[0].gifUrl)
        setloading(false)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const capitalizeFirstLetter = (str:string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }
  return (
    <LinearGradient
      style={styles.exercisePage}
      locations={[0, 1]}
      colors={["rgba(255, 177, 132, 0.6)", "rgba(215, 159, 129, 0.6)"]}
    >
      <View style={{backgroundColor:'#fff'}}>
      <Text style={[styles.exercises, styles.warmUpFlexBox]}>Exercises</Text>
      <View style={{
        top: 60,

        right: 16,
        position: "absolute"
      }}>

        <DropdownFilter handleFilter={handleFilter} selectedOption={selectedOption} />

      </View>
        <Text style={[styles.exercises, styles.warmUpFlexBox]}>Exercises</Text>

        <View style={styles.container}>
          <FlatList
            data={exerciseData}
            renderItem={({ item }) => {
              return <ExerciseTitle  name={item.name} gifUrl={item.gifUrl} setImageUrl={setImageUrl} setHeader={setHeader}   ></ExerciseTitle>;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

    </LinearGradient>
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
    marginTop: 209,
    height: '35%',
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
    fontSize: 15,
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
    height: '50%',
  },
  exercises: {
    top: 183,
    fontSize: 18,
    width: 95,
    height: 25,
    fontWeight: "700",
    color: Color.colorGray,
    left: 19,
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
    left: 173,
    backgroundColor: Color.colorAntiquewhite_200,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
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
    top: '37%',
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
