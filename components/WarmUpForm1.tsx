import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CategoryCard from "./CategoryCard";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const WarmUpForm1 = () => {
  const navigation:any = useNavigation();

  return (
    <View style={[styles.categories, styles.cardsLayout]}>
      
      <Text style={[styles.seeAll, styles.seeAllFlexBox]}>See all</Text>
      <Text style={[styles.categories1, styles.seeAllFlexBox]}>Categories</Text>
      <View style={[styles.cards, styles.cardsLayout,{marginBottom:10}]}>
        <CategoryCard
          imageId={require("../assets/img.png")}
          exerciseImageUrl="Warm up"
          categoryCardWidth={142}
          categoryCardHeight={196}
          categoryCardMarginLeft="unset"
          categoryCardBackgroundColor="#ddf2ff"
          imgIconTop={0}
          imgIconLeft={0}
          warmUpMarginLeft={-44}
          onCategoryCardPress={() => navigation.navigate("ExercisePage")}
        />
        <CategoryCard
          imageId={require("../assets/img1.png")}
          exerciseImageUrl="Yoga"
          categoryCardWidth={142}
          categoryCardHeight={196}
          categoryCardMarginLeft={10}
          categoryCardBackgroundColor="#f1f3fa"
          imgIconTop={0}
          imgIconLeft={0}
          warmUpMarginLeft={-23}
        />
        <CategoryCard
          imageId={require("../assets/img2.png")}
          exerciseImageUrl="Squats"
          categoryCardWidth={142}
          categoryCardHeight={196}
          categoryCardMarginLeft={10}
          categoryCardBackgroundColor="#ffe6d6"
          imgIconTop={10}
          imgIconLeft={0}
          warmUpMarginLeft={-33}
        />
        <CategoryCard
          imageId={require("../assets/img3.png")}
          exerciseImageUrl="Lunge"
          categoryCardWidth={142}
          categoryCardHeight={236}
          categoryCardMarginLeft={10}
          categoryCardBackgroundColor="#ddf2ff"
          imgIconTop={-31}
          imgIconLeft={-32}
          warmUpMarginLeft={-29}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsLayout: {
    width: '110%',
    overflow:'scroll',
    position:'relative'
  },
  seeAllFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  cards: {
    top: 32,
    flexDirection: "row",
    left: 0,
  },
  seeAll: {
    top: 2,
    right: 110,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.interBold,
    color: 'blue',
    // textDecorationLine:'underline'
  },
  categories1: {
    top: 0,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_400,
    left: 10,
  },
  categories: {
    top: '52%',
    left: 20,
    height: 268,
    
  },
});

export default WarmUpForm1;
