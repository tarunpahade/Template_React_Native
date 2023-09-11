import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Pressable,
    ImageBackground,
  } from "react-native";
import { Image } from "expo-image";

import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

 const Onboarding = () => {
  return (
    <View>
<View style={[styles.onboarding]}>
        <View style={[styles.onboardingChild]} />
        <View style={styles.onboardingText}>
          <View style={styles.wafflesAreJustPancakesWithParent}>
            <Text style={styles.wafflesAreJust}>
              Waffles are just pancakes with abs
            </Text>
            <Text style={[styles.ourRecipesAnd, styles.getStartedTypo]}>
              Our recipes and workouts are the perfect way to start your day.
              Sweat hard, then have a snack or drink. Whatever you prefer!
            </Text>
          </View>
          {/* <View style={styles.onboardingTextInner}>
            <View style={styles.rectangleParent}>
              <View style={styles.groupChild} />
              <View style={[styles.groupItem, styles.groupItemLayout]} />
            </View>
          </View> */}
          <Pressable style={styles.cta}>
          <Text style={[styles.getStarted, styles.getStartedTypo]}>
            Get Started
          </Text>
        </Pressable>
        </View>
      
        <View style={styles.onboardingImage}>
          <Image
            style={[styles.onboardingImageChild, styles.onboardingPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-679.png")}
          />
          <Text style={[styles.exergize1, styles.exergizeTypo]}>EXERGIZE</Text>
          <Text style={[styles.exergize2, styles.exergizeTypo]}>EXERGIZE</Text>
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.groupInner, styles.onboardingPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-633.png")}
            />
            <Image
              style={[styles.removebgPreview1Icon, styles.onboardingPosition]}
              contentFit="cover"
              source={require("../assets/4124811-0removebgpreview-1.png")}
            />
          </View>
          <Image
            style={[styles.onboardingImageItem, styles.onboardingPosition]}
            contentFit="cover"
            source={require("../assets/group-436.png")}
          />
          <View style={styles.ellipseGroup}>
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse-634.png")}
            />
            {/* left side hand exercise */}
            <ImageBackground
              style={[
                styles.imageRemovebgPreview371,
                styles.backgroundTransform,
              ]}
              resizeMode="cover"
              source={require("../assets/imageremovebgpreview371.png")}
            />
          </View>
          <Image
            style={styles.onboardingImageInner}
            contentFit="cover"
            source={require("../assets/group-428.png")}
          />
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-429.png")}
          />

          {/* this is the middle one */}
          <View style={[styles.groupView, styles.groupLayout1]}>
            <View style={[styles.ellipseContainer, styles.groupLayout1]}>
              <Image
                style={[styles.groupChild1, styles.groupPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-631.png")}
              />
              <Image
                style={[styles.ellipseContainer, styles.groupLayout1]}
                contentFit="cover"
                source={require("../assets/gymv1-2.png")}
              />
            </View>
          </View>
          <Image
            style={styles.onboardingImageChild1}
            contentFit="cover"
            source={require("../assets/group-4281.png")}
          />
        </View>
        <ImageBackground
          style={styles.gymv14Icon}
          resizeMode="cover"
          source={require("../assets/gymv14.png")}
        />
      </View>
        </View>      
  )
}
const styles = StyleSheet.create({
    exergizeLayout1: {
      width: "100%",
      backgroundColor: Color.colorWhite,
    },
    backgroundTransform: {
      transform: [
        {
          rotate: "0deg",
        },
      ],
      position: "absolute",
    },
 
   
    getStartedTypo: {
      fontSize: FontSize.size_base,
      textAlign: "center",
      fontFamily: FontFamily.droidSans,
    },
    groupItemLayout: {
      width: 61,
      backgroundColor: Color.colorYellowgreen_200,
      borderRadius: Border.br_3xs,
    },
    onboardingPosition: {
      left: 192,
      position: "absolute",
    },
    exergizeTypo: {
      fontFamily: FontFamily.quantum,
      letterSpacing: 0.9,
      fontSize: FontSize.size_xl,
      textAlign: "center",
      position: "absolute",
    },
    groupLayout1: {
      height: 187,
      width: 197,
    },
    groupPosition: {
      top: 39,
      position: "absolute",
    },
    headerPosition: {
      top: 68,
      left: 16,
      position: "absolute",
    },
    helloKakashiTypo: {
      fontSize: FontSize.size_7xl,
      top: 24,
      textAlign: "left",
      color: Color.colorGray_200,
      fontFamily: FontFamily.droidSans,
      fontWeight: "700",
      left: 0,
      position: "absolute",
    },
    friTypo: {
      fontSize: FontSize.size_xs,
      fontFamily: FontFamily.droidSans,
      position: "absolute",
    },
    iconLayout: {
      height: 24,
      width: 24,
    },
    trainingLayout: {
      width: 553,
      position: "absolute",
    },
    kmhTypo: {
      fontSize: FontSize.size_xl,
      color: Color.colorGray_200,
    },
    wrapperFlexBox: {
      paddingVertical: Padding.p_10xs,
      paddingHorizontal: Padding.p_lg,
      borderRadius: Border.br_31xl,
      height: 30,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      top: 0,
      position: "absolute",
    },
    beginnerTypo: {
      lineHeight: 20,
      fontSize: FontSize.size_xs,
      textAlign: "center",
      fontFamily: FontFamily.droidSans,
    },
    mostActiveTypo: {
      fontSize: FontSize.size_sm,
      fontFamily: FontFamily.droidSans,
    },
    groupChildLayout1: {
      height: 40,
      width: 40,
    },
    nounDumbbell11993431ParentFlexBox: {
      justifyContent: "flex-end",
      width: 51,
      alignItems: "center",
    },
    runningTypo: {
      fontFamily: FontFamily.droidSans,
      fontWeight: "700",
    },
    groupChild7Position: {
      top: 16,
      position: "absolute",
    },
    groupLayout: {
      height: 116,
      width: 209,
    },
    parentPosition: {
      left: 12,
      position: "absolute",
    },
    letsGoTypo: {
      fontSize: FontSize.size_lg,
      textAlign: "left",
      fontFamily: FontFamily.droidSans,
      fontWeight: "700",
    },
    hoursTypo: {
      color: Color.colorGray_300,
      fontSize: FontSize.size_sm,
      textAlign: "left",
      fontFamily: FontFamily.droidSans,
    },
    groupFrameLayout: {
      width: 118,
      height: 116,
    },
    groupChildBorder2: {
      borderWidth: 1,
      borderColor: Color.colorGray_200,
      borderStyle: "solid",
      borderRadius: Border.br_xs,
      left: 0,
      top: 0,
      position: "absolute",
    },
    groupWrapperLayout: {
      height: 72,
      width: 173,
    },
    groupChild8Layout: {
      width: 155,
      height: 72,
    },
    groupChild9Layout: {
      height: 209,
      width: 343,
    },
    groupChildBorder: {
      height: 56,
      top: 117,
      borderWidth: 0.3,
      borderColor: Color.colorGray_300,
      borderTopRightRadius: Border.br_5xs,
      borderTopLeftRadius: Border.br_5xs,
      borderStyle: "solid",
      backgroundColor: Color.colorPlum,
      position: "absolute",
    },
    groupChildLayout: {
      borderWidth: 0.3,
      borderTopRightRadius: Border.br_5xs,
      borderTopLeftRadius: Border.br_5xs,
      width: 24,
    },
    lineViewBorder: {
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      position: "absolute",
    },
    monTypo: {
      top: 179,
      fontSize: FontSize.size_xs,
      textAlign: "center",
      color: Color.colorGray_200,
      fontFamily: FontFamily.droidSans,
      position: "absolute",
    },
    background: {
      left: 1440,
      backgroundColor: "#ece9ff",
      width: 1440,
      top: 0,
      height: 1024,
    },
    exergizeChild: {
      left: 308,
      height: 724,
      top: 162,
    },
    onboardingChild: {
      backgroundColor: Color.colorWhitesmoke,
   
    },
    wafflesAreJust: {
      fontSize: 30,
      width: 343,
      textAlign: "center",
      color: Color.colorGray_200,
      fontFamily: FontFamily.droidSans,
      fontWeight: "700",
    },
    ourRecipesAnd: {
      lineHeight: 24,
      color: "#8d8f8f",
      width: 330,
      marginTop: 16,
    },
    wafflesAreJustPancakesWithParent: {
      alignItems: "center",
    },
    groupChild: {
      width: 69,
      backgroundColor: Color.colorGray_200,
      borderRadius: Border.br_3xs,
      left: 37,
      height: 6,
      top: 0,
      position: "absolute",
    },
    groupItem: {
      height: 6,
      left: 0,
      top: 0,
      position: "absolute",
    },
    rectangleParent: {
      width: 106,
      height: 6,
    },
    onboardingTextInner: {
      flexDirection: "row",
      marginTop: 16,
    },
    onboardingText: {
      top: 431,
      alignItems: "center",
      left: 16,
      position: "absolute",
    },
    getStarted: {
      color: Color.colorWhitesmoke,
      fontWeight: "700",
    },
    cta: {
      top: '100%',
      left: 90,
      borderBottomRightRadius: Border.br_xl,
      paddingHorizontal: 30,
      paddingVertical: 10,
      justifyContent: "center",
      borderTopLeftRadius: Border.br_xl,
      width: 195,
      backgroundColor: Color.colorGray_200,
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
    },
    onboardingImageChild: {
      height: '55%',
      top: 142,
      width: '60%',
    },
    exergize1: {
      top: 208,
      left: 320,
      color: Color.colorGray_200,
    },
    exergize2: {
      top: 206,
      left: 318,
      color: Color.colorYellowgreen_200,
    },
    groupInner: {
      width: 131,
      height: 185,
      top: 142,
    },
    removebgPreview1Icon: {
      width: 170,
      height: 204,
      top: 152,
    },
    ellipseParent: {
      width: 372,
      height: 356,
      left: 0,
      top: 0,
      position: "absolute",
    },
    onboardingImageItem: {
      top: 374,
      height: 287,
      width: 195,
      left: 192,
    },
    ellipseIcon: {
      top: 155,
      left: 45,
      width: 236,
      height: 327,
      position: "absolute",
    },
    imageRemovebgPreview371: {
      top: 196,
      width: 231,
      height: 162,
      left: 70,
    },
    ellipseGroup: {
      top: 182,
      left: 286,
      width: 508,
      height: 536,
      position: "absolute",
    },
    onboardingImageInner: {
      top: 236,
      left: 510,
      width: 22,
      height: 22,
      position: "absolute",
    },
    groupIcon: {
      top: 471,
      width: 16,
      height: 16,
      left: 320,
      position: "absolute",
    },
    groupChild1: {
      left: -17,
      height: 197,
      width: 197,
    },
    ellipseContainer: {
      left: 0,
      top: 20,
      position: "absolute",
    },
    groupView: {
      top: 257,
      left: 252,
      position: "absolute",
    },
    onboardingImageChild1: {
      left: 200,
      width: 13,
      height: 8,
      top: 142,
      position: "absolute",
    },
    onboardingImage: {
      top: -142,
      left: -192,
      width: 794,
      height: 718,
      position: "absolute",
    },
    gymv14Icon: {
      top: 267,
      left: -89,
      width: 188,
      height: '50%',
      position: "absolute",
    },
    onboarding: {
  
      borderRadius: Border.br_xl,
      height: '100%',
      overflow: "hidden",
      backgroundColor: Color.colorWhite,
    },
    image170Icon: {
      top: 58,
      left: 124,
      position: "absolute",
    },
    heading: {
      height: 84,
      width: 248,
    },
    trainingModuleChild: {
      top: -84,
      left: 95,
      width: 363,
      height: 363,
      position: "absolute",
    },
    trainingModuleItem: {
      top: -75,
      left: 120,
      width: 313,
      height: 313,
      position: "absolute",
    },
    trainingModuleInner: {
      top: 54,
      left: 89,
      height: 529,
    },
    running: {
      textAlign: "center",
      fontFamily: FontFamily.droidSans,
      fontWeight: "700",
    },
    beginner: {
      color: Color.colorGray_200,
    },
    beginnerWrapper: {
      width: 97,
      backgroundColor: Color.colorWhitesmoke,
      left: 0,
    },
    intermediate: {
      color: Color.colorWhitesmoke,
      fontWeight: "700",
    },
    intermediateWrapper: {
      left: 109,
      width: 121,
      backgroundColor: Color.colorGray_200,
    },
    advancedWrapper: {
      left: 242,
      width: 100,
      backgroundColor: Color.colorWhitesmoke,
    },
    frameParent: {
      alignSelf: "stretch",
      marginTop: 30,
      height: 30,
    },
    runningRefersTo: {
      lineHeight: 21,
      width: 342,
      marginTop: 30,
      color: Color.colorGray_100,
      textAlign: "center",
    },
    rectangleView: {
      backgroundColor: Color.colorYellowgreen_100,
      borderRadius: Border.br_xs,
      height: 48,
      width: 152,
      left: 0,
      top: 0,
      position: "absolute",
    },
    kmh: {
      top: 12,
      left: 37,
      fontSize: FontSize.size_xl,
      textAlign: "center",
      fontFamily: FontFamily.droidSans,
      fontWeight: "700",
      position: "absolute",
    },
    rectangleGroup: {
      height: 48,
      width: 152,
      marginTop: 30,
    },
    runningParent: {
      top: 207,
      left: 106,
      alignItems: "center",
      position: "absolute",
    },
    nounKettlebell15292841Icon: {
      left: 126,
      top: 62,
      width: 40,
      position: "absolute",
      overflow: "hidden",
    },
    nounGymnastRings4905501Icon: {
      left: 387,
      top: 62,
      width: 40,
      position: "absolute",
      overflow: "hidden",
    },
    nounRunningShoe12003751Icon: {
      top: 56,
      left: 251,
      height: 51,
      width: 51,
      position: "absolute",
      overflow: "hidden",
    },
    trainingModule: {
      top: 229,
      left: -89,
      height: 532,
    },
    bottomShadowBox: {
      shadowOpacity: 1,
      elevation: 60,
      shadowRadius: 60,
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowColor: "rgba(37, 39, 39, 0.06)",
      borderTopRightRadius: Border.br_xl,
      height: 85,
      borderTopLeftRadius: Border.br_xl,
      backgroundColor: Color.colorWhitesmoke,
      left: 0,
      width: 375,
      top: 0,
      position: "absolute",
    },
    nounDumbbell11993431Icon: {
      overflow: "hidden",
    },
    training1: {
      fontSize: FontSize.size_2xs,
      color: Color.colorMediumslateblue,
      marginTop: 4,
      textAlign: "center",
    },
    nounDumbbell11993431Parent: {
      marginLeft: 35,
    },
    frameGroup: {
      top: 18,
      left: 33,
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
    },
    bottomNav: {
      top: 727,
      height: 85,
      left: 0,
      width: 375,
      position: "absolute",
    },
    rectangle: {
      height: "100%",
      top: "0%",
      right: "0%",
      bottom: "0%",
      left: "0%",
      display: "none",
      position: "absolute",
    },
    statusBarIcon: {
      right: 14,
      width: 67,
      height: 12,
    },
 
    status: {
      height: 44,
      left: 0,
      width: 375,
      top: 0,
      position: "absolute",
      overflow: "hidden",
    },
    training: {
      left: 947,
      top: 106,
      borderRadius: Border.br_31xl,
      height: 812,
      overflow: "hidden",
      backgroundColor: Color.colorWhite,
    },
    wwwnickelfoxcom: {
      top: 974,
      left: 1223,
      fontWeight: "500",
      fontFamily: FontFamily.droidSans,
      textAlign: "right",
      position: "absolute",
    },
    helloKakashi: {
      letterSpacing: 0.8,
      textAlign: "left",
    },
    everydayWereMusclen: {
      letterSpacing: 0.5,
      color: Color.colorGray_100,
      textAlign: "left",
      left: 0,
      top: 0,
    },
    image171Icon: {
      top: 26,
      left: 196,
      position: "absolute",
    },
    header: {
      width: 220,
      height: 54,
    },
    myPlan1: {
      textAlign: "left",
      fontFamily: FontFamily.droidSans,
      fontWeight: "700",
      left: 0,
      top: 0,
      position: "absolute",
    },
    groupChild2: {
      backgroundColor: Color.colorPlum,
      height: 116,
      width: 209,
      borderRadius: Border.br_xs,
      left: 0,
      top: 0,
      position: "absolute",
    },
    workout: {
      color: Color.colorGray_200,
    },
    hours: {
      marginTop: 2,
    },
    workoutParent: {
      top: 65,
    },
    groupChild3: {
      height: 40,
      width: 40,
      top: 12,
    },
    groupContainer: {
      left: 0,
      top: 0,
      position: "absolute",
    },
    groupChild4: {
      width: 118,
      height: 116,
    },
    frameContainer: {
      left: 0,
      top: 0,
      position: "absolute",
    },
    groupFrame: {
      marginLeft: 16,
    },
    groupParent: {
      flexDirection: "row",
      left: 0,
    },
    groupChild6: {
      borderWidth: 1,
      borderColor: Color.colorGray_200,
      borderStyle: "solid",
      borderRadius: Border.br_xs,
      left: 0,
      top: 0,
      position: "absolute",
    },
    foodParent: {
      top: 17,
    },
    groupChild7: {
      left: 121,
      height: 40,
      width: 40,
    },
    groupWrapper2: {
      left: 0,
      top: 0,
      position: "absolute",
    },
    groupChild8: {
      borderRadius: Border.br_xs,
      width: 155,
      backgroundColor: Color.colorGray_200,
      left: 0,
      top: 0,
      position: "absolute",
    },
    letsGo: {
      color: Color.colorWhitesmoke,
    },
    frameChild: {
      height: 4,
      marginTop: 4,
    },
    letsGoParent: {
      top: 22,
      left: 43,
      alignItems: "center",
      position: "absolute",
    },
    rectangleParent2: {
      marginLeft: 16,
    },
    frameView: {
      top: 171,
      flexDirection: "row",
      left: 0,
      position: "absolute",
    },
    myPlan: {
      height: 243,
      width: 344,
    },
    weeklyStats1: {
      letterSpacing: 0.4,
      textAlign: "left",
      fontFamily: FontFamily.droidSans,
      fontWeight: "700",
    },
    groupChild9: {
      borderRadius: Border.br_xl,
      borderColor: "rgba(37, 39, 39, 0.2)",
      borderWidth: 0.5,
      borderStyle: "solid",
      height: 209,
      left: 0,
      top: 0,
      position: "absolute",
    },
    groupChild10: {
      left: 18,
      width: 25,
    },
    groupChild11: {
      left: 65,
      height: 67,
      borderColor: Color.colorGray_300,
      borderWidth: 0.3,
      borderTopRightRadius: Border.br_5xs,
      borderTopLeftRadius: Border.br_5xs,
      borderStyle: "solid",
      backgroundColor: Color.colorPlum,
      position: "absolute",
      top: 106,
    },
    groupChild12: {
      top: 130,
      left: 112,
      height: 43,
      borderColor: Color.colorGray_300,
      borderWidth: 0.3,
      borderTopRightRadius: Border.br_5xs,
      borderTopLeftRadius: Border.br_5xs,
      borderStyle: "solid",
      backgroundColor: Color.colorPlum,
      position: "absolute",
    },
    groupChild13: {
      top: 57,
      left: 206,
      borderWidth: 0.3,
      borderTopRightRadius: Border.br_5xs,
      borderTopLeftRadius: Border.br_5xs,
      width: 24,
      borderColor: Color.colorBlack,
      height: 116,
      backgroundColor: Color.colorYellowgreen_100,
    },
    groupChild14: {
      top: 91,
      left: 159,
      height: 82,
      borderColor: Color.colorGray_300,
      borderWidth: 0.3,
      borderTopRightRadius: Border.br_5xs,
      borderTopLeftRadius: Border.br_5xs,
      borderStyle: "solid",
      backgroundColor: Color.colorPlum,
      position: "absolute",
    },
    groupChild15: {
      top: 98,
      left: 253,
      height: 75,
      borderColor: Color.colorGray_300,
      borderWidth: 0.3,
      borderTopRightRadius: Border.br_5xs,
      borderTopLeftRadius: Border.br_5xs,
      borderStyle: "solid",
      backgroundColor: Color.colorPlum,
      position: "absolute",
    },
    groupChild16: {
      left: 300,
      width: 24,
      height: 56,
      top: 117,
    },
    mon: {
      left: 17,
    },
    tue: {
      left: 66,
    },
    wed: {
      left: 111,
    },
    thu: {
      left: 160,
    },
    fri: {
      top: 180,
      left: 210,
      textAlign: "center",
      color: Color.colorGray_200,
    },
    sat: {
      left: 256,
    },
    sun: {
      left: 301,
    },
    mostActive: {
      color: "rgba(37, 39, 39, 0.5)",
      textAlign: "left",
      fontWeight: "700",
    },
    friday: {
      marginLeft: 6,
      fontWeight: "700",
    },
    mostActiveParent: {
      left: 105,
      flexDirection: "row",
    },
    lineView: {
      top: 173,
      borderTopWidth: 0.5,
      height: 1,
      width: 344,
      left: 0,
    },
    rectangleParent3: {
      marginTop: 16,
    },
    weeklyStats: {
      marginTop: 42,
    },
    myPlanParent: {
      top: 158,
      left: 15,
      alignItems: "center",
      position: "absolute",
    },
 
    exergize: {
      flex: 1,
      overflow: "hidden",
      height: 1024,
    },
  });

  export default Onboarding