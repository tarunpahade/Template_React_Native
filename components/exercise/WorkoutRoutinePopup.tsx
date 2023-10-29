import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useSelector } from "react-redux";
import { useGetRoutineDetailsQuery } from "../../store/apiSlicer";

const WorkoutRoutinePopup = ({
  visible,
  onCancel,
  onCreateRoutine,
  handleAddToRoutine,
}: any) => {
  const [newRoutineTitle, setNewRoutineTitle] = useState("");
  const [createNewRoutine, setCreateNewRoutine] = useState(false);
  const [loading, setloading] = useState(true);
  const [noRoutineAdded, setnoRoutineAdded] = useState(false);

  const profileData = useSelector((state: any) => state.account);
  const email = profileData.account.email
  const { data: rotieneDataFeatched, isLoading, error } = useGetRoutineDetailsQuery(email)
  const [rotieneData, setRouteneData] = useState(rotieneDataFeatched)
if(isLoading){
  return (
    <ActivityIndicator />
  )
}
  const handleCheckboxChange = (routineIndex: number) => {
    setRouteneData((prevData: any) => {
      const updatedRoutines = [...prevData];
      updatedRoutines[routineIndex].checked =
        !updatedRoutines[routineIndex].checked;
      return updatedRoutines;
    });
  };
  const handleCreateNewRoutine = () => {
    onCreateRoutine(newRoutineTitle);
    // Clear the input field
    setNewRoutineTitle("");
  };

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 8,
            opacity: 1,
            height: "45%",
            width: "90%",
          }}
        >
          <Text style={{ padding: 5, paddingLeft: 0 }}>
            Select Workout Routine
          </Text>
          {noRoutineAdded && (<Text>No Routine Added</Text>)

          }

          {isLoading ? <ActivityIndicator /> : (
            <View style={{ height: '55%' }}>
              {createNewRoutine ? (
                <View >
                  <TextInput
                    placeholder="Add Title"
                    value={newRoutineTitle}
                    style={{ marginTop: 5 }}
                    onChangeText={(text) => setNewRoutineTitle(text)}
                  />
                </View>
              ) : (
                <View style={{ height: "65%" }}>
                  <RoutineList
                    routines={rotieneData}
                    setInitialChecked={handleCheckboxChange}
                  />
                </View>

              )}
            </View>

          )

          }


          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 5,
              padding: "5%",
            }}
          >
            <TouchableOpacity
              style={{
                borderColor: "#eee",
                borderWidth: 1,
                flex: 2, // 40% width for the "Cancel" button
                marginLeft: 0,
                marginRight: 10,

                paddingVertical: 10, // Adding padding to vertically center the text
                paddingHorizontal: 2,
                alignItems: "center", // Center text horizontally
                backgroundColor: "#fff",
              }}
              onPress={onCancel}
            >
              <Text style={{ color: "#333" }}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderColor: "#eee",
                borderWidth: 1,
                marginLeft: 5,

                //   flex: 2, // 40% width for the "Create Routine" button
                paddingVertical: 10, // Adding padding to vertically center the text
                paddingHorizontal: 8,
                alignItems: "center", // Center text horizontally
                backgroundColor: "#000",
              }}
              onPress={() => {
                const filteredRoutienes = rotieneData.filter(
                  (x: { checked: boolean; }) => x.checked === true
                );
                console.log(filteredRoutienes);
                if (filteredRoutienes.length === 0) {
                  if (newRoutineTitle.length === 0) {
                    setnoRoutineAdded(false)
                    setCreateNewRoutine(true);
                  } else {
                    handleCreateNewRoutine();
                  }
                } else {
                  handleAddToRoutine(filteredRoutienes);
                }
              }}
            >
              {rotieneData.filter((x: { checked: boolean; }) => x.checked === true).length === 0 ? (
                <Text style={{ color: '#fff' }}>Create Routine</Text>
              ) : (
                <Text style={{ color: '#fff' }}>Add To Routine</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WorkoutRoutinePopup;
interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

interface Routine {
  name: string;
  checked: boolean;
}

interface RoutineListProps {
  routines: Routine[];
  setInitialChecked: any;
}

const RoutineList: React.FC<RoutineListProps> = ({
  routines,
  setInitialChecked,
}) => {
  return (
    <FlatList
      data={routines}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View
          style={{
            marginBottom: 0,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              //   setInitialChecked(index);
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 0,
              padding: 0,
            }}
          >
            <Text
              style={{
                marginLeft: 10,
                fontSize: 15,
                marginVertical: 0,
                fontWeight: "bold",
                color: "#333",
              }}
            >
              {item.name}
            </Text>
            <CheckBox

              checked={item.checked}
              onPress={() => setInitialChecked(index)}
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};
