import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        //   blurRadius={0}
        style={styles.background}
        source={require("../assets/yBLogo.jpg")}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    margin: 30,
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});
