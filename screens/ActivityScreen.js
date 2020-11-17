import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image1}
        source={require("../assets/swimming.jpg")}
      >
      <AppText style={styles.title}>Do something active!</AppText>
      <AppText style={styles.subText}>A good aerobic activity will help. Try something shown here. </AppText>
      </ImageBackground>
      <View style={styles.view2}>
          
      <Image
        style={styles.image2}
        source={require("../assets/stairsRun.jpeg")}
      ></Image>
      <ImageBackground
        style={styles.image3}
        source={require("../assets/cycling2.jpg")}
      >
          <AppText style={styles.subText2}>"Energy and persistance conquer all things" - Benjamin Franklin</AppText>
      </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image1: {
    width: "100%",
    height: "100%",
    flex:2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image2: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image3: {
    width: "100%",
    height: "100%",
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  view2: {
    flex: 1,
    flexDirection: "row"
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.white,
    backgroundColor: "rgba(256, 256, 256, 0.0)",
    alignContent: "center",
    alignSelf: "center",
  },
  subText: {
    fontSize: 16,
    fontWeight: "500",
    padding: 20,
    color: colors.white,
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(52, 52, 0, 0.0)",
  },
  subText2: {
    fontSize: 16,
    fontWeight: "500",
    padding: 20,
    color: colors.white,
    backgroundColor: "rgba(52, 52, 0, 0.0)",
  },
});
