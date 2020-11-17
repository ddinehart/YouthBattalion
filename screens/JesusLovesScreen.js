import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import AppText from "../components/AppText";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Jesus loves you</AppText>
      <AppText style={styles.subText}>
        DC 8:24: Be patient in afflictions for thou shall have many; but endure
        them, for lo I am with thee even util the end of thy days.{" "}
      </AppText>
      <ImageBackground
        style={styles.background}
        source={require("../assets/jesus.jpeg")}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
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
    fontSize: 24,
    fontWeight: "500",
    padding: 20,
    backgroundColor: "rgba(52, 52, 0, 0.0)",
    alignContent: "center",
    alignSelf: "center",
  },
  subText: {
    fontSize: 16,
    fontWeight: "500",
    padding: 20,
    backgroundColor: "rgba(52, 52, 0, 0.0)",
  },
});
