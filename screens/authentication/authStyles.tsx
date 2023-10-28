import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      paddingTop:'34%',
      alignItems: "flex-start",
      marginLeft: "8%",
      
    },
    subContainer: {
      width: "100%",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
      textAlign: "center",
    },
    nav: {
      width: "90%",
      display: "flex",
      flexDirection: "row",
      height: 30,
      position: "absolute",
      top: 60,
      justifyContent: "space-between",
      alignItems: "center",
    },
    subHeader: {
      color: "#a3abac",
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      marginBottom: 7,
    },
    input: {
      width: "90%",
      padding: 5,
      fontSize: 15,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0.5,
      opacity: 0.5,
      marginBottom: 20,
      borderColor: "gray",
      borderWidth: 1,
      fontWeight: "700",
      
    },
    button: {
      backgroundColor: "#198fb4",
      color: "#fff",
      padding: 10,
      paddingHorizontal: 25,
      borderRadius: 14,
      width: "90%",
      textAlign: "center",
    },
    inputContainer: {
      width: "100%",
      marginBottom:15
    },
    TitleContainer: {
      width: "100%",
      marginVertical: 10,
      justifyContent: "center",
      marginBottom: 20,
    },
  
    btnText: {
      color: "#fff",
      textAlign: "center",
      fontSize: 14,
    },
    bottomContainer: { width: "90%", justifyContent: "space-between",display:'flex',flexDirection:"row" ,marginTop:10},
    bottomText: {
      color: "#ff7043",
      textAlign: "center",
      marginTop: 15,
    },
  });