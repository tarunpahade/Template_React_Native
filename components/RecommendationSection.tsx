import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const RecommendationSection = () => {
  return (
    <View style={styles.seeAllParent}>
      <Text style={styles.seeAll}>See all</Text>
      <Text style={[styles.recommendationClass, styles.classTypo]}>
        Recommendation Class
      </Text>
      <Pressable style={[styles.cardTodayActivity, styles.cardLayout]}>
        <Image
          style={[styles.cardTodayActivityChild, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/frame-4.png")}
        />
        <View style={styles.yogaClassParent}>
          <Text style={[styles.yogaClass, styles.classTypo]}>Yoga Class</Text>
          <Text style={styles.withRachaelWisdom}>With Rachael Wisdom</Text>
        </View>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  classTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  cardLayout: {
    overflow: "hidden",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  seeAll: {
    top: 1,
    right: 0,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDeepskyblue_200,
    textAlign: "left",
    position: "absolute",
  },
  recommendationClass: {
    top: 0,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_400,
    left: 0,
    position: "absolute",
  },
  cardTodayActivityChild: {
    top: 6,
    left: 6,
    width: 101,
    height: 68,
  },
  yogaClass: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_100,
  },
  withRachaelWisdom: {
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray_200,
    marginTop: 5,
    textAlign: "left",
  },
  yogaClassParent: {
    top: 20,
    left: 117,
    position: "absolute",
  },
  icon: {
    top: 26,
    left: 324,
    width: 37,
    height: 37,
    position: "absolute",
  },
  cardTodayActivity: {
    top: 32,
    backgroundColor: Color.colorGhostwhite,
    shadowColor: "rgba(251, 251, 251, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    height: 80,
    left: 0,
    width: 374,
  },
  seeAllParent: {
    top: 424,
    left: 20,
    height: 112,
    width: 374,
    position: "absolute",
  },
});

export default RecommendationSection;
