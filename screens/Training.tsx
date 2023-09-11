import * as React from "react";
import { Text, StyleSheet, View, Pressable, StatusBar } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const Training = () => {
  return (
    <View style={styles.training}>
      <View style={styles.heading}>
        <Text style={styles.chooseATraining}>Choose a training for today</Text>
        <Text style={styles.tooMuchProtein}>
          TOO MUCH PROTEIN? NO WHEY, MATE!
        </Text>
        <Image
          style={[styles.image170Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-170.png")}
        />
      </View>
      <View style={[styles.trainingModule, styles.trainingLayout]}>
        <Image
          style={styles.trainingModuleChild}
          contentFit="cover"
          source={require("../assets/group-431.png")}
        />
        <Image
          style={styles.trainingModuleItem}
          contentFit="cover"
          source={require("../assets/group-432.png")}
        />
        <Image
          style={[styles.trainingModuleInner, styles.trainingLayout]}
          contentFit="cover"
          source={require("../assets/vector-74.png")}
        />
        <View style={styles.runningParent}>
          <Text style={[styles.running, styles.runningTypo]}>Running</Text>
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <View style={styles.beginnerWrapper}>
              <Text style={[styles.beginner, styles.beginnerTypo]}>
                Beginner
              </Text>
            </View>
            <Pressable
              style={[styles.intermediateWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.intermediate, styles.beginnerTypo]}>
                Intermediate
              </Text>
            </Pressable>
            <View style={[styles.advancedWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.beginner, styles.beginnerTypo]}>
                Advanced
              </Text>
            </View>
          </View>
          <Text
            style={styles.runningRefersTo}
          >{`Running refers to terrestrial locomotion allowing humans and other animals to move rapidly on foot. `}</Text>
          <Pressable style={[styles.kmhWrapper, styles.bottomNavSpaceBlock]}>
            <Text style={[styles.running, styles.runningTypo]}>14 km/h</Text>
          </Pressable>
        </View>
        <Image
          style={[styles.nounKettlebell15292841Icon, styles.nounIconLayout]}
          contentFit="cover"
          source={require("../assets/nounkettlebell1529284-1.png")}
        />
        <Image
          style={[styles.nounGymnastRings4905501Icon, styles.nounIconLayout]}
          contentFit="cover"
          source={require("../assets/noungymnastrings490550-1.png")}
        />
        <Image
          style={styles.nounRunningShoe12003751Icon}
          contentFit="cover"
          source={require("../assets/nounrunningshoe1200375-1.png")}
        />
      </View>
      <View style={[styles.bottomNav, styles.statusPosition]}>
        <View style={styles.frameFlexBox}>
          <View style={styles.nounDumbbell11993431ParentFlexBox}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/iconlylightoutlinegraph2.png")}
            />
          </View>
          <View
            style={[
              styles.nounDumbbell11993431Parent,
              styles.nounDumbbell11993431ParentFlexBox,
            ]}
          >
            <Image
              style={[styles.nounDumbbell11993431Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/noundumbbell1199343-11.png")}
            />
            <Text style={[styles.training1, styles.runningTypo]}>Training</Text>
          </View>
          <View
            style={[
              styles.nounDumbbell11993431Parent,
              styles.nounDumbbell11993431ParentFlexBox,
            ]}
          >
            <Image
              style={[styles.nounDumbbell11993431Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/nounfood750655-1.png")}
            />
          </View>
          <View
            style={[
              styles.nounDumbbell11993431Parent,
              styles.nounDumbbell11993431ParentFlexBox,
            ]}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/iconlylightoutlineprofile.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
  },
  trainingLayout: {
    width: 553,
    position: "absolute",
  },
  runningTypo: {
    textAlign: "center",
    fontFamily: FontFamily.droidSans,
    fontWeight: "700",
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  beginnerTypo: {
    lineHeight: 20,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.droidSans,
  },
  wrapperSpaceBlock: {
    marginLeft: 11,
    justifyContent: "center",
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_lg,
    borderRadius: Border.br_31xl,
    flexDirection: "row",
    height: 30,
    alignItems: "center",
  },
  bottomNavSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
  },
  nounIconLayout: {
    height: 40,
    width: 40,
    top: 62,
    position: "absolute",
    overflow: "hidden",
  },
  statusPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  nounDumbbell11993431ParentFlexBox: {
    justifyContent: "flex-end",
    width: 51,
    alignItems: "center",
  },
  chooseATraining: {
    top: 24,
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    fontFamily: FontFamily.droidSans,
    left: 0,
    color: Color.colorGray_200,
    fontWeight: "700",
    width: 248,
    position: "absolute",
  },
  tooMuchProtein: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.droidSans,
    left: 0,
    position: "absolute",
  },
  image170Icon: {
    top: 58,
    left: 124,
    position: "absolute",
  },
  heading: {
    top: 68,
    left: 16,
    height: 84,
    width: 248,
    position: "absolute",
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
    fontSize: FontSize.size_xl,
    color: Color.colorGray_200,
  },
  beginner: {
    color: Color.colorGray_200,
  },
  beginnerWrapper: {
    width: 97,
    justifyContent: "center",
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_lg,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke,
    flexDirection: "row",
    height: 30,
    alignItems: "center",
  },
  intermediate: {
    color: Color.colorWhitesmoke,
    fontWeight: "700",
    lineHeight: 20,
  },
  intermediateWrapper: {
    backgroundColor: Color.colorGray_200,
    width: 121,
  },
  advancedWrapper: {
    width: 100,
    backgroundColor: Color.colorWhitesmoke,
  },
  frameParent: {
    marginTop: 30,
    height: 30,
    flexDirection: "row",
    width: 342,
  },
  runningRefersTo: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    marginTop: 30,
    width: 342,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.droidSans,
  },
  kmhWrapper: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorYellowgreen_100,
    width: 152,
    height: 48,
    paddingVertical: Padding.p_xs,
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
  },
  nounGymnastRings4905501Icon: {
    left: 387,
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
  nounDumbbell11993431Icon: {
    overflow: "hidden",
  },
  training1: {
    fontSize: FontSize.size_2xs,
    color: Color.colorMediumslateblue,
    marginTop: 4,
  },
  nounDumbbell11993431Parent: {
    marginLeft: 35,
  },
  bottomNav: {
    top: 727,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    shadowColor: "rgba(37, 39, 39, 0.06)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    height: 85,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: 0,
    alignItems: "center",
    backgroundColor: Color.colorWhitesmoke,
  },
  training: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Training;
