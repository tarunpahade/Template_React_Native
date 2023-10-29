import * as React from "react";
import { FlatList, ScrollView, View, StyleSheet, Image, Text } from "react-native";

function MyComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/c30aa756-f4d8-4d78-b7a4-9d35ae94865a?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
          }}
          style={styles.logo}
        />
        <View style={styles.title}>
          <Text>Breakfast</Text>
        </View>
        <Image
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/620d2e95-5f35-43aa-aa4f-b3a4f2116f21?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
          }}
          style={styles.image}
        />
      </View>
      <Image
        resizeMode="cover"
        source={{
          uri:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6ceb44e2-a76d-4b2c-b71a-702e57363f68?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
        }}
        styles={styles.banner}
      />
        <View style={styles.overlay} />
    
      <View style={styles.category}>
        <Text>Category</Text>
      </View>
      <View style={styles.grid}>
        <Image
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/28090205-a4e4-4c2c-8732-4fcedb8b2b8a?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
          }}
          style={styles.gridItem}
        />
        <Image
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/9b77706f-5394-46d1-9369-631cf8ddba23?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
          }}
          style={styles.gridItem}
        />
        <Image
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/000c7622-e2d1-4ce2-a396-255389c8261f?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
          }}
          style={styles.gridItem}
        />
        <Image
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/c4016fd1-f2f3-444d-b8e2-244be9229704?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
          }}
          styles={styles.gridItem}
        />
      </View>
      <View style={styles.recommendation}>
        <Text>Recommendation for Diet</Text>
      </View>
      <View style={styles.recommendationGrid}>
        <Image
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/f4a04d87-0f2f-4b16-a86a-e7199663c8ed?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
          }}
          style={styles.recommendationItem}
        />
        <Image
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/3eb9cf84-a644-4411-a974-9a9f0d7cbeeb?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
          }}
          style={styles.recommendationItem}
        />
      </View>
      <View style={styles.popular}>
        <Text>Popular</Text>
      </View>
      <View style={styles.popularItem}>
        <Image
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/41071118-8357-4af2-8719-ea2645444f35?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
          }}
          style={styles.popularImage}
        />
        <View style={styles.popularContent}>
          <View style={styles.popularTitle}>
            <Text>Blueberry Pancake</Text>
          </View>
          <View style={styles.popularDetails}>
            <Text>Medium | 30mins | 230kCal</Text>
          </View>
        </View>
        <Image
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/6db559f6-59f1-4709-be16-05359ead4c5a?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
          }}
          style={styles.popularImage}
        />
      </View>
      <Image
        source={{
          uri:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/83d8b877-11d3-48af-a2c5-c633b97455d3?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
        }}
        style={styles.footer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 40,
    backgroundColor: "#FFF",
    display: "flex",
    paddingLeft: 20,
    flexDirection: "column",
  },
  header: {
    alignSelf: "center",
    display: "flex",
    marginTop: 40,
    width: 315,
    maxWidth: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 20,
  },
  logo: {
    overflow: "hidden",
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    width: 32,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: 1,
  },
  title: {
    color: "var(--Black-color, #1D1617)",
    alignSelf: "center",
    margin: "auto 0",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "Poppins, sans-serif",
  },
  image: {
    overflow: "hidden",
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    width: 32,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: 1,
  },
  banner: {
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
    display: "flex",
    aspectRatio: 6.3,
    marginTop: 30,
    width: 315,
    maxWidth: "100%",
    flexDirection: "column",
  },
  overlay: {
    borderRadius: 16,
   // boxShadow: "0px 10px 40px 0px rgba(29, 22, 23, 0.07)",
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    width: "100%",
    height: 50,
    flexDirection: "column",
  },
  category: {
    color: "var(--Black-color, #1D1617)",
 //   alignSelf: "start",
 //   whiteSpace: "nowrap",
    margin: "29px 0 0 10px",
    fontWeight: "600",
    fontSize: 16,
//    lineHeight: "150%",
    fontFamily: "Poppins, sans-serif",
  },
  grid: {
    alignSelf: "start",
    display: "flex",
    width: 345,
    maxWidth: "100%",
    alignItems: "flex-start",
    gap: 15,
    margin: "17px 0 0 10px",
  },
  gridItem: {
    overflow: "hidden",
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    width: 80,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: 0.8,
  },
  recommendation: {
    alignSelf: "start",
    display: "flex",
    width: 345,
    maxWidth: "100%",
    alignItems: "flex-start",
    gap: 15,
    margin: "21px 0 0 10px",
  },
  recommendationGrid: {
    alignSelf: "center",
    display: "flex",
    marginTop: 17,
    width: 315,
    maxWidth: "100%",
    paddingRight: 15,
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderRadius: 16,
    boxShadow: "0px 10px 40px 0px rgba(29, 22, 23, 0.07)",
    backgroundColor: "#FFF",
  },
  recommendationItem: {
    overflow: "hidden",
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    width: 200,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: 0.84,
  },
  popular: {
    color: "var(--Black-color, #1D1617)",
    alignSelf: "start",
    whiteSpace: "nowrap",
    margin: "28px 0 0 10px",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: "150%",
    fontFamily: "Poppins, sans-serif",
  },
  popularItem: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    margin: "auto 0",
  },
  popularImage: {
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
    display: "flex",
    width: 90,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: 1.13,
  },
  popularContent: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  popularTitle: {
    color: "var(--Black-color, #1D1617)",
    alignSelf: "start",
    whiteSpace: "nowrap",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: "150%",
    fontFamily: "Poppins, sans-serif",
  },
  popularDetails: {
    color: "var(--gray-1, #B6B4C2)",
    alignSelf: "start",
    whiteSpace: "nowrap",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: "150%",
    fontFamily: "Poppins, sans-serif",
  },
  footer: {
    borderRadius: 16,
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
    display: "flex",
    marginTop: 15,
    width: 315,
    maxWidth: "100%",
    flexGrow: 1,
    flexDirection: "column",
    aspectRatio: 5.08,
  },
});

export default MyComponent;