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
        source={require("../assets/stop.jpeg")}
      >
        <AppText style={styles.title}>
          Elisha taught us- " Fear not: for they that be with us are more than
          they that be with them." -2 Kings 6:16
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
    fontSize: 24,
    fontWeight: "500",
    color: colors.black,
    padding: 20,
    margin: 10,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
  },
});
