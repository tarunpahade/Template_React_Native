import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

type CategoryCardType = {
  imageId?: ImageSourcePropType;
  exerciseImageUrl?: string;

  /** Style props */
  categoryCardWidth?: number | string;
  categoryCardHeight?: number | string;
  categoryCardMarginLeft?: number | string;
  categoryCardBackgroundColor?: string;
  imgIconTop?: number | string;
  imgIconLeft?: number | string;
  warmUpMarginLeft?: number | string;

  /** Action props */
  onCategoryCardPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CategoryCard = ({
  imageId,
  exerciseImageUrl,
  categoryCardWidth,
  categoryCardHeight,
  categoryCardMarginLeft,
  categoryCardBackgroundColor,
  imgIconTop,
  imgIconLeft,
  warmUpMarginLeft,
  onCategoryCardPress,
}: CategoryCardType) => {
  const categoryCardStyle = useMemo(() => {
    return {
      ...getStyleValue("width", categoryCardWidth),
      ...getStyleValue("height", categoryCardHeight),
      ...getStyleValue("marginLeft", categoryCardMarginLeft),
      ...getStyleValue("backgroundColor", categoryCardBackgroundColor),
    };
  }, [
    categoryCardWidth,
    categoryCardHeight,
    categoryCardMarginLeft,
    categoryCardBackgroundColor,
  ]);

  const imgIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", imgIconTop),
      ...getStyleValue("left", imgIconLeft),
    };
  }, [imgIconTop, imgIconLeft]);

  const warmUpStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", warmUpMarginLeft),
    };
  }, [warmUpMarginLeft]);

  return (
    <View
      style={[styles.categoryCard, categoryCardStyle]}
      onPress={onCategoryCardPress}
    >
      <Image
        style={[styles.imgIcon, imgIconStyle]}
        contentFit="cover"
        source={imageId}
      />
      <Text style={[styles.warmUp, warmUpStyle]}>{exerciseImageUrl}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgIcon: {
    top: 0,
    left: 0,
    width: 212,
    bottom:10,
    height: 309,
    position: "absolute",
  },
  warmUp: {
    marginLeft: -44,
    top: 15,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    color: Color.colorGray_400,
    textAlign: "center",
    position: "absolute",
  },
  categoryCard: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 142,
    height: 236,
    overflow: "hidden",
  },
});

export default CategoryCard;
