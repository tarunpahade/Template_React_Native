import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { Color } from '../../GlobalStyles';

const screen = Dimensions.get('window');

const formatNumber = (number: number) => `0${number}`.slice(-2);

const getRemaining = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

function Clock() {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);

 const toggle = () => {
    setIsActive(!isActive);
  }

 const reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | null | undefined = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [isActive, remainingSecs]);


  return (
    <View style={styles2.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles2.timerText}>{`${mins}:${mins}:${secs}`}</Text>
      <Text style={[styles2.timerText,{fontSize:19,color:Color.colorGray_100}]}>{` Hour : Minutes : Seconds`}</Text>
      {/* <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row',width:'80%',marginTop:20}}>
      <TouchableOpacity onPress={()=>{toggle()}} style={styles2.button}>
          <Text style={styles2.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>reset()} style={[styles2.button, styles2.buttonReset]}>
          <Text style={[styles2.buttonText, styles2.buttonTextReset]}>Reset</Text>
      </TouchableOpacity>      </View> */}

    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
  left:-40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
      borderWidth: 5,
      borderColor: '#B9AAFF',
      width: screen.width / 3,
      height: screen.width / 3,
      borderRadius: screen.width / 2,
      alignItems: 'center',
      justifyContent: 'center'
  },
  buttonText: {
      fontSize: 25,
      color: '#B9AAFF'
  },
  timerText: {
      color: '#000',
      fontSize: 60,
      marginBottom: 20
  },
  buttonReset: {

      borderColor: "#FF851B"
  },
  buttonTextReset: {
    color: "#FF851B"
  }
});




import { Image } from "expo-image";
import { FontFamily, FontSize, Padding, Border } from "../../GlobalStyles";

const Training = () => {
  return (
    <View style={styles.training}>
      <View style={styles.heading}>
        <Text style={styles.chooseATraining}>Take A Break And Be Spiritual</Text>
        <Text style={styles.tooMuchProtein}>
          Use Our Meditation Feature To Meditate
        </Text>
    </View>
      <View style={[styles.trainingModule, styles.trainingLayout]}>

        <View style={styles.runningParent}>
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
          <Pressable style={[styles.kmhWrapper, styles.bottomNavSpaceBlock]}>
            <Text style={[styles.running, styles.runningTypo]}>Start</Text>
          </Pressable>
        </View>
     <Clock />
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
    width: 550,
    position: "absolute",
  },
  runningTypo: {
    textAlign: "left",
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
    width: 87,
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 1,
    borderRadius: Border.br_31xl,

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
    left: 87,
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


export default Training