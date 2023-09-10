import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <View style={styles.header}>
        <Text style={[styles.helloKakashi, styles.helloKakashiTypo]}>
          Hello, Kakashi
        </Text>
        <Text style={[styles.everydayWereMusclen, styles.friTypo]}>
          EVERYDAY WE’RE MUSCLE’N
        </Text>
        <Image
          style={[styles.image171Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-171.png")}
        />
      </View>
      <StatusBar style={styles.statusPosition} barStyle="default" />
      <View style={styles.myPlanParent}>
        <View style={styles.myPlan}>
          <Text style={styles.myPlan1Typo}>My Plan</Text>
          <View style={styles.frameParent}>
            <TouchableOpacity
              style={[styles.groupParent, styles.groupLayout]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("Training")}
            >
              <Image
                style={styles.frameLayout1}
                contentFit="cover"
                source={require("../assets/group-454.png")}
              />
              <View style={styles.workoutParent}>
                <Text style={[styles.workout, styles.letsGoTypo]}>Workout</Text>
                <Text style={[styles.hours, styles.hoursTypo]}>2 hours</Text>
              </View>
            </TouchableOpacity>
            <View style={[styles.groupContainer, styles.containerBorder]}>
              <Image
                style={styles.frameLayout1}
                contentFit="cover"
                source={require("../assets/group-456.png")}
              />
              <View style={styles.workoutParent}>
                <Text style={[styles.workout, styles.letsGoTypo]}>
                  Meditate
                </Text>
                <Text style={[styles.hours, styles.hoursTypo]}>2 hours</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={[styles.frameContainer, styles.frameLayout]}>
              <View>
                <Text style={[styles.workout, styles.letsGoTypo]}>Food</Text>
                <Text style={[styles.hours, styles.hoursTypo]}>2 hours</Text>
              </View>
              <Image
                style={[styles.frameInner, styles.frameLayout1]}
                contentFit="cover"
                source={require("../assets/group-459.png")}
              />
            </View>
            <View style={[styles.frameWrapper, styles.frameLayout]}>
              <View style={styles.letsGoParent}>
                <Text style={[styles.letsGo, styles.letsGoTypo]}>Let’s Go</Text>
                <View style={styles.rectangleView} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.weeklyStats}>
          <Text style={[styles.weeklyStats1, styles.myPlan1Typo]}>
            Weekly Stats
          </Text>
          <View style={styles.rectangleParent}>
            <View style={[styles.frameChild1, styles.frameChildBorder]} />
            <View style={[styles.frameChild2, styles.frameChildLayout]} />
            <View style={[styles.frameChild3, styles.frameChildLayout]} />
            <View style={[styles.frameChild4, styles.lineViewBorder]} />
            <View style={[styles.frameChild5, styles.frameChildLayout]} />
            <View style={[styles.frameChild6, styles.frameChildLayout]} />
            <View style={[styles.frameChild7, styles.frameChildBorder]} />
            <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
            <Text style={[styles.tue, styles.monTypo]}>Tue</Text>
            <Text style={[styles.wed, styles.monTypo]}>Wed</Text>
            <Text style={[styles.thu, styles.monTypo]}>Thu</Text>
            <Text style={[styles.fri, styles.monTypo]}>Fri</Text>
            <Text style={[styles.sat, styles.monTypo]}>Sat</Text>
            <Text style={[styles.sun, styles.monTypo]}>Sun</Text>
            <View style={styles.mostActiveParent}>
              <Text style={styles.mostActive}>Most Active:</Text>
              <Text style={[styles.friday, styles.hoursTypo]}>Friday</Text>
            </View>
            <View style={[styles.lineView, styles.lineViewBorder]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloKakashiTypo: {
    textAlign: "left",
    fontFamily: FontFamily.droidSans,
  },
  friTypo: {
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  statusPosition: {
    top: 0,
    left: 0,
  },
  groupLayout: {
    paddingTop: Padding.p_xs,
    height: 116,
    borderRadius: Border.br_xs,
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
  containerBorder: {
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_xs,
  },
  frameLayout: {
    paddingVertical: 0,
    height: 72,
    borderRadius: Border.br_xs,
  },
  frameLayout1: {
    height: 40,
    width: 40,
  },
  myPlan1Typo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.droidSans,
    fontWeight: "700",
  },
  frameChildBorder: {
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
  frameChildLayout: {
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
    textAlign: "center",
    fontFamily: FontFamily.droidSans,
  },
  nounDumbbell11993431WrapperFlexBox: {
    justifyContent: "flex-end",
    width: 51,
    alignItems: "center",
  },
  helloKakashi: {
    top: 24,
    fontSize: FontSize.size_7xl,
    letterSpacing: 0.8,
    color: Color.colorGray_200,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  everydayWereMusclen: {
    letterSpacing: 0.5,
    color: Color.colorGray_100,
    top: 0,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.droidSans,
  },
  image171Icon: {
    top: 26,
    left: 196,
    position: "absolute",
  },
  header: {
    top: 68,
    left: 16,
    width: 220,
    height: 54,
    position: "absolute",
  },
  workout: {
    color: Color.colorGray_200,
  },
  hours: {
    marginTop: 2,
  },
  workoutParent: {
    marginTop: 13,
  },
  groupParent: {
    width: 209,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.colorPlum,
    paddingTop: Padding.p_xs,
    height: 116,
    borderRadius: Border.br_xs,
  },
  groupContainer: {
    width: 118,
    marginLeft: 16,
    paddingTop: Padding.p_xs,
    height: 116,
    borderRadius: Border.br_xs,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
  },
  frameParent: {
    marginTop: 16,
    flexDirection: "row",
  },
  frameInner: {
    marginLeft: 61,
  },
  frameContainer: {
    width: 173,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
  },
  letsGo: {
    color: Color.colorWhitesmoke,
  },
  rectangleView: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorYellowgreen_200,
    width: 61,
    height: 4,
    marginTop: 4,
  },
  letsGoParent: {
    alignItems: "center",
  },
  frameWrapper: {
    backgroundColor: Color.colorGray_200,
    width: 155,
    paddingHorizontal: 42,
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 16,
  },
  myPlan: {
    height: 243,
    width: 344,
  },
  weeklyStats1: {
    letterSpacing: 0.4,
  },
  frameChild1: {
    left: 18,
    width: 25,
  },
  frameChild2: {
    top: 106,
    left: 65,
    height: 67,
    borderColor: Color.colorGray_300,
    borderWidth: 0.3,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    borderStyle: "solid",
    backgroundColor: Color.colorPlum,
    position: "absolute",
  },
  frameChild3: {
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
  frameChild4: {
    top: 57,
    left: 206,
    backgroundColor: Color.colorYellowgreen_100,
    borderWidth: 0.3,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    width: 24,
    borderColor: Color.colorBlack,
    height: 116,
  },
  frameChild5: {
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
  frameChild6: {
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
  frameChild7: {
    left: 300,
    width: 24,
    height: 56,
    top: 117,
  },
  mon: {
    left: 17,
    top: 179,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
    position: "absolute",
  },
  tue: {
    left: 66,
    top: 179,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
    position: "absolute",
  },
  wed: {
    left: 111,
    top: 179,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
    position: "absolute",
  },
  thu: {
    left: 160,
    top: 179,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
    position: "absolute",
  },
  fri: {
    top: 180,
    left: 210,
    fontSize: FontSize.size_xs,
    position: "absolute",
    color: Color.colorGray_200,
  },
  sat: {
    left: 256,
    top: 179,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
    position: "absolute",
  },
  sun: {
    left: 301,
    top: 179,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
    position: "absolute",
  },
  mostActive: {
    color: "rgba(37, 39, 39, 0.5)",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.droidSans,
    fontWeight: "700",
  },
  friday: {
    marginLeft: 6,
    fontWeight: "700",
  },
  mostActiveParent: {
    top: 16,
    left: 105,
    flexDirection: "row",
    position: "absolute",
  },
  lineView: {
    top: 173,
    borderTopWidth: 0.5,
    height: 1,
    width: 344,
    left: 0,
  },
  rectangleParent: {
    borderRadius: Border.br_xl,
    borderColor: "rgba(37, 39, 39, 0.2)",
    borderWidth: 0.5,
    width: 343,
    height: 209,
    borderStyle: "solid",
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
  dashboard: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Dashboard;
