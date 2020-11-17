import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        //   blurRadius={0}
        style={styles.background}
        source={require("../assets/temple.jpg")}
      >
        <AppText style={styles.title}>
          "Move forward with faith"
        </AppText>
        <AppText style={styles.subtitle}>
          - Gordon B Hinkley
        </AppText>
        <AppText style={styles.bottomText}>
          You are making better decisions! Want more ideas to distract you?
        </AppText>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    // marg"in: 30,
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.black,
    padding: 20,
    margin: 10,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
  },
  subtitle: {
      flex: 2,
    fontSize: 14,
    fontWeight: "500",
    color: colors.black,

    backgroundColor: "rgba(0, 0, 0, 0.0)",
  },
  bottomText: {
    fontSize: 24,
    padding: 20,
    margin: 10,
    fontWeight: "500",
    color: colors.white,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});
