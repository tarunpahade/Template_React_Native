import * as React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  FlatList,
  Modal,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import ExerciseTitle from "../components/exercise/ExerciseCard";
import { LinearGradient } from "expo-linear-gradient";
import { useGetRoutineDetailsQuery } from "../store/apiSlicer";
import { useSelector } from "react-redux";
import Carousel, { Pagination } from 'react-native-snap-carousel';


interface ListProps {
  title: string;
  key: string;
  day: string;
}
interface YourCarouselComponentProps {
  rotieneData: any; // Define the type for rotieneData
  renderItem: any; // Define the type for renderItem
}
interface RenderItemProps {
  item: any; // Define the type for item
}
const Homepage = () => {
  const navigation: any = useNavigation();
  const [exerciseData, setExerciseData] = React.useState();


  const profileData = useSelector((state:any) => state.account);
const email=  profileData.account.email
console.log(email);

  const { data:rotieneData, isLoading, error,refetch } = useGetRoutineDetailsQuery('Tarunpahade6969@gmail.com')
  
console.log(rotieneData);

  const [routine,setShowRoutine]=useState(false)
  
  const onRoutieneClick =(exercise:any)=>{
    console.log(exercise,'hii');
    
    setExerciseData(exercise)
    setShowRoutine(true)
  }
  
  const windowWidth = Dimensions.get('window').width;
  const itemWidth = Dimensions.get('window').width - 70; // Adjust the item width according to your design.
  
  const YourCarouselComponent: React.FC<YourCarouselComponentProps>  = ({ rotieneData, renderItem }:any) => {
    const [activeSlide, setActiveSlide] = useState(0);
    return (
      <View style={{marginTop:5}}>
        <Carousel
          data={rotieneData.data}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          layout="default"
          layoutCardOffset={2}
          itemWidth={itemWidth}
          keyExtractor={(item:any, index:number) => index.toString()}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      <Pagination
      
  dotsLength={rotieneData.data.length}
  activeDotIndex={activeSlide}
  dotStyle={{
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: 'black', // Change the active dot color to black
  }}
  inactiveDotStyle={{
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: 'grey', // Change the inactive dot color to grey
  }}
  containerStyle={{paddingTop:0,marginVertical:8}}
  inactiveDotOpacity={0.4}
  inactiveDotScale={0.6}
/>

      </View>
    );
  };
  
  
  const renderItem: React.FC<RenderItemProps> = ({ item }: any) => (
    <TouchableOpacity
      style={[
        styles.searchBarLayout,
        {
          height: 160,
marginLeft:-26,
marginRight:10,
          backgroundColor: Color.colorAliceblue_100,
        },
      ]}
      activeOpacity={0.2}
      onPress={() => onRoutieneClick(item.workout)}
    >
      <Text style={[styles.todaysActivity]}>{item.name}</Text>
      <Text style={[styles.am130, styles.am130FlexBox]}>{item.day}</Text>
      <Image
        style={styles.jogging1Icon}
        contentFit="cover"
        source={require("../assets/jogging-1.png")}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.homepage}>
      <View style={[styles.menu, styles.menuLayout]}>
        <Image
          style={[styles.menuIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/menuicon.png")}
        />
        <Text style={[styles.helloAdamSmith, styles.findYourTypo]}>
          Hello, User
        </Text>
        <View style={{ borderWidth: 0.2, borderRadius: 18 }}>
          <TouchableOpacity  onPress={()=>{navigation.navigate('Profile')}}>
          <Image
            source={require("../assets/iconlylightoutlineprofile.png")}
            style={{ tintColor: "#000", width: 14, height: 14, margin: 7 }}
          />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={[styles.tagline, styles.am130FlexBox]}>
        <Text>
          <Text style={styles.findYourTypo}>Find Your</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.text}>Workout Class</Text>
      </Text>
     

      <TouchableOpacity
        style={[styles.cardTodayActivity, styles.searchBarLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Exercise")}
      >
        <Text style={[styles.todaysActivity]}>Select Workout</Text>
     
        <Image
          style={styles.jogging1Icon}
          contentFit="cover"
          source={require("../assets/jogging-1.png")}
        />
      </TouchableOpacity>

      <View
        style={[
          { borderColor: "#fff", marginTop: 30 },
          styles.cardTodayActivity2,
        ]}
      >
        <Text style={[styles.findYourTypo, { marginBottom: 5 ,display:"flex",flexDirection:'row'}]}>
          Your Routiens
        </Text>
{isLoading ? (
<ActivityIndicator />
  ) : (

<YourCarouselComponent rotieneData={rotieneData} renderItem={renderItem} />

  )
}
      </View>
      <Modal visible={routine}>
    
      <LinearGradient
      style={styles.exercisePage}
      locations={[0, 1]}
      colors={["rgba(255, 177, 132, 0.6)", "rgba(215, 159, 129, 0.6)"]}
    >
      <View style={{backgroundColor:'#fff'}}>
  
      <Text style={[styles.exercises, styles.warmUpFlexBox]}>Exercises</Text>
      <View style={{
        top: 63,

        right: 16,
        position: "absolute"
      }}>
      <Text onPress={()=>{setShowRoutine(false)}}>Go Back</Text>



      </View>
 

      <View style={styles.container}>
        <FlatList
          data={exerciseData}
          renderItem={({ item }) => {
            return <ExerciseTitle dataObj={item} fromRoutiene={true} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>

    </LinearGradient >
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarLayout: {
    borderRadius: Border.br_mini,
  },
  scrollView: {
    height: "80%", // Set an appropriate height here, or use flex properties.
    flex: 1,
  },
  absoluteContainer: {
    position: "relative", // You can use 'relative' or 'static'
  },
  am130FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
 
  menuLayout: {
    height: 33,
  },
  iconLayout1: {
    width: 20,
    overflow: "hidden",
  },
  findYourTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  iconLayout: {
    width: 25,
    height: 25,
  },
  todaysActivity: {
    left: 26,
    fontSize: FontSize.size_lg,
    lineHeight: 35,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    color: Color.colorGray_400,
    textAlign: "left",
    position: "relative",
    top: 28,
  },
  am130: {
    bottom: 80,
    left: 25,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.interBold,
    color: "#b0b0b0",
    width: 135,
    height: 17,
    textAlign: "left",
  },
  jogging1Icon: {
    marginTop: -80,
    top: "55%",
    right: 30,
    width: "43%",
    height: "80%",
    overflow: "hidden",
    position: "absolute",
  },
  cardTodayActivity: {
    top: 159,
    backgroundColor: Color.colorAliceblue_100,
    height: 160,
    overflow: "hidden",
    width: "90%",
    left: 0,
    marginLeft: "5%",
    position: "absolute",
  },
  cardTodayActivity2: {
    top: 229,

    height: "60%",
    overflow: "hidden",
    width: "90%",
    left: 0,
    marginLeft: "5%",
    //  position: "absolute",
  },
  searchBar: {
    marginLeft: -187,
    top: 154,
    left: 200,
    backgroundColor: "#f5f5f5",
    height: 50,
    paddingHorizontal: 30,
    paddingVertical: 0,
    alignItems: "center",
    fontFamily: FontFamily.quantum,
    fontSize: FontSize.size_base,
    width: "90%",
    borderRadius: Border.br_5xs,
  },
  text: {
    fontWeight: "900",
    fontFamily: FontFamily.quantum,
  },
  tagline: {
    top: 94,
    fontSize: 21,
    lineHeight: 30,
    color: Color.colorGray_300,
    textAlign: "left",
    left: 20,
    paddingTop:5
  },
  menuIcon: {
    top: 0,
    left: 0,
    height: 14,
    position: "relative",
  },
  helloAdamSmith: {
    top: 0,
    position: "relative",
    left: "50%",
    fontSize: FontSize.size_sm,
    textAlign: "left",

    color: Color.colorGray_300,
  },
  avatarIcon: {
    width: 30,
  },
  menu: {
    flexDirection: "row",
    position: "relative",

    justifyContent: "space-between",
    alignItems: "center",
    height: 33,
    paddingHorizontal: 20, // Adjust the padding as needed
    backgroundColor: "white", // Add the background color if necessary
    marginTop: 40,
  },

  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  homeIcon: {
    height: 25,
  },
  peopleIcon: {
    height: 25,
  },
  settingsIcon: {
    height: 25,
    overflow: "hidden",
  },
  navigationBar: {
    top: 842,
    left: -1,
    width: 414,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_xs,
    alignItems: "flex-end",
    justifyContent: "space-between",
    display: "none",
  },
  homepage: {
    backgroundColor: Color.colorWhite,
    flex: 1,

    width: "100%",
    overflow: "scroll",
  },


  //modal container 
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
  
  exercises: {
    top: 63,
    fontSize: 19,
    width: 95,
    height: 25,
    fontWeight: "700",
    color: 'gray',
    left: 19,
    position: "absolute",
  },
  exercisePage: {
    flex: 1,
    height: '100%',
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },

});

export default Homepage;
