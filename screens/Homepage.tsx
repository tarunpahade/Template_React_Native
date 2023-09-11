import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import WarmUpForm1 from "../components/WarmUpForm1";
import RecommendationSection from "../components/RecommendationSection";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Homepage = () => {
  const navigation:any = useNavigation();

  return (
    <View style={styles.homepage}>
       <View style={[styles.menu, styles.menuLayout]}>
  <Image
    style={[styles.menuIcon, styles.iconLayout1]}
    contentFit="cover"
    source={require("../assets/menuicon.png")}
  />
  <Text style={[styles.helloAdamSmith, styles.findYourTypo]}>
    Hello, Adam Smith
  </Text>
  <Image
    style={[styles.avatarIcon, styles.menuLayout]}
    contentFit="cover"
    source={require("../assets/avatar.png")}
  />
</View>

<Text style={[styles.tagline, styles.am130FlexBox]}>
        <Text>
          <Text style={styles.findYourTypo}>Find Your</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.text}>Workout Class</Text>
      </Text>
      <TextInput
        style={[styles.searchBar, styles.barFlexBox]}
        placeholder="Search"
        placeholderTextColor="#c4c4c4"
      />
     
      <TouchableOpacity
        style={[styles.cardTodayActivity, styles.searchBarLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Exercise")}
      >
        <Text style={[styles.todaysActivity]}>
          Today’s Activity
        </Text>
        <Text style={[styles.am130, styles.am130FlexBox]}>
          8.00 AM - 1.30 PM
        </Text>
        <Image
          style={styles.jogging1Icon}
          contentFit="cover"
          source={require("../assets/jogging-1.png")}
        />
      </TouchableOpacity>
{/*    
      <RecommendationSection />
     */}
      <WarmUpForm1 />
      
      <ScrollView style={styles.scrollView}>
      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarLayout: {
    borderRadius: Border.br_mini,
    
  },
  scrollView: {
    height: '80%', // Set an appropriate height here, or use flex properties.
    flex: 1,
  },
  absoluteContainer: {
    position: 'relative', // You can use 'relative' or 'static'
  },
  am130FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  barFlexBox: {
    flexDirection: "row",
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
    position:'relative',
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
    textAlign:'left'
  },
  jogging1Icon: {
    marginTop: -80,
    top: "55%",
    right: 30,
    width: '43%',
    height: '80%',
    overflow: "hidden",
    position: "absolute",
  },
  cardTodayActivity: {
    top: 229,
    backgroundColor: Color.colorAliceblue_100,
    height: 160,
    overflow: "hidden",
    width: '90%',
    left: 0,
    marginLeft:'5%',
    position: "absolute",
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
    width: '90%',
    borderRadius: Border.br_5xs,
  },
  text: {
    fontWeight: "900",
    fontFamily: FontFamily.quantum,
  },
  tagline: {
    top: 94,
    fontSize: 22,
    lineHeight: 30,
    color: Color.colorGray_300,
    textAlign: "left",
    left: 20,
  },
  menuIcon: {
    top: 0,
    left: 0,
    height: 14,
    position:'relative',
    
  },
  helloAdamSmith: {
    top: 0,
    position:'relative',
    left: '50%',
    fontSize: FontSize.size_sm,
    textAlign: "left",

    color: Color.colorGray_300,
  },
  avatarIcon: {
    width: 30,
  },
  menu: {
    flexDirection: 'row',
    position:'relative',

    justifyContent: 'space-between',
    alignItems: 'center',
    height: 33,
    paddingHorizontal: 20, // Adjust the padding as needed
    backgroundColor: 'white', // Add the background color if necessary
 marginTop:25
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
    overflow:'scroll'
  },
});

export default Homepage;
