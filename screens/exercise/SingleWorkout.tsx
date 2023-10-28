import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, Padding, FontSize } from "./Styles";
import { useEffect, useState } from "react";
import WorkoutRoutinePopup from "../../components/exercise/WorkoutRoutinePopup";
import axios from "axios";
import { useCreateNewRoutineMutation, useGetExerciseQuery, useInsertIntoExistingRoutineMutation } from "../../store/apiSlicer";
import { useSelector } from "react-redux";
interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

export const SingleWorkout = ({ route }: any) => {
  const singleWorkoutDetails: Exercise = route.params.dataObj;
  const [currentWorkout, setcurrentWorkout] = useState(true);
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const profileData = useSelector((state:any) => state.account);
  const email=  profileData.account.email
  console.log(email,'This is email');
  
  const [newRoutiene] = useCreateNewRoutineMutation();


  const [addIntoExisting] = useInsertIntoExistingRoutineMutation();


      const { data:workout, error, isLoading } = useGetExerciseQuery(route.params.dataObj.id);
      if (error) {
        console.log(error);
      }
      if (isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
        );
      }
      console.log(workout);
      
  //Here CreatE a New Exercise Routine
  const appendDataToWorkout = async(title: string) => {
    console.log("hii");

    console.log("Send an API request to Database with Routine Title:", title);
    try {
     const newRoutine=await newRoutiene({ name: title, email:email, workout: [singleWorkoutDetails] })
      console.log(newRoutine);
      setIsPopupVisible(false);
    } catch (error: any) {
      console.log(error.message);

    }

    console.log(title, singleWorkoutDetails);

    setIsPopupVisible(false);
  };
  ///Here Request To append to existing Routine
  const handleAddToRoutine = async(routineDetails: any) => {
    console.log(
      "Name Of Routine Playlist",
      routineDetails,
      singleWorkoutDetails
    );
    const routieneId = routineDetails.map((x: { _id: any }) => x._id);
    routineDetails[0].workout.push(singleWorkoutDetails)
    console.log(routineDetails[0]);

    try {

     const newRoutine=await addIntoExisting( { routieneId: routieneId, updatedWorkout: routineDetails })
      console.log(newRoutine);
      alert('Workout Added Successfully')
      setIsPopupVisible(false);
    } catch (error: any) {
      console.log(error.message);

    }
  };
  return (
    <LinearGradient
      style={styles.exercisePage}
      locations={[0, 1]}
      colors={["#fff", "#fff"]}
    >
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../../assets/menu.png")}
      />
      <Image
        style={[styles.mainImageIcon, styles.contentPosition]}
        contentFit="cover"
        source={{ uri: workout.data.gifUrl }}
      />
      <Image
        style={[styles.menuIcon1, styles.menuIcon1Layout]}
        contentFit="cover"
        source={require("../../assets/menu1.png")}
      />
      <View style={[styles.content, styles.contentPosition]}>
        <TouchableOpacity
          onPress={() => setIsPopupVisible(true)}
          style={[styles.statusDuration, styles.statusFlexBox]}
        >
          <Image
            style={styles.iconRunning}
            contentFit="cover"
            source={require("../../assets/icon--running.png")}
          />
          <Text style={[styles.running, styles.minsTypo]}>Add To Routine</Text>
        </TouchableOpacity>

        {/* Render the popup component when isPopupVisible is true */}
        {isPopupVisible && (
          <WorkoutRoutinePopup
            visible={isPopupVisible}
            onCancel={() => setIsPopupVisible((prev)=>!prev)}
            onCreateRoutine={appendDataToWorkout}
            handleAddToRoutine={handleAddToRoutine}
          />
        )}

        <View style={[styles.statusDuration1, styles.statusFlexBox]}>
        
          <Text style={[styles.mins, styles.minsTypo]}>target muscle: {workout.data.target}</Text>
        </View>
        <View style={[styles.dragOverlayPrototyping, styles.statusFlexBox]}>
          <View style={styles.dragOverlayPrototypingChild} />
        </View>
        <View style={[styles.tagline, styles.taglinePosition]}>
          <Text style={[styles.warmUp, styles.warmUpFlexBox]}>
            {workout.data.name}
          </Text>
          <Text style={[styles.warmUpProperlyContainer, styles.minutesClr]}>

            {currentWorkout ? (
         workout.data.instructions
            ) : (
              <>
              {`Warm up properly before exercising to prevent `}injury and make
              your workouts more effective.
           </>
            )

            }
            </Text>
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

    position: "relative",
    marginTop: 209,
    height: "35%",
    marginLeft: 10,
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
    left: "90%",
    width: 6,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  mainImageIcon: {
    top: 24,
    width: "100%",
    height: "53%",
    paddingTop: 10,
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
    left: 163,
    backgroundColor: Color.colorAntiquewhite_200,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    top: 185,

    alignItems: "center",
  },
  mins: {
    color: Color.colorDeepskyblue,
  },
  statusDuration1: {
    backgroundColor: Color.colorAliceblue,
    left: 12,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    top: 185,
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
    left: "45%",
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
    width: "80%",
  },
  tagline: {
    top: 32,
    height: 81,
    width: "100%",
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
    top: "62%",
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  menuIcon1: {
    top: 22,
    left: 21,
    opacity: 0,
    height: 27,
  },
  exercisePage: {
    flex: 1,
    height: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});
