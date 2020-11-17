import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import StopScreen from "./screens/StopScreen";
import JesusLovesScreen from "./screens/JesusLovesScreen";
import TempleScreen from "./screens/TempleScreen";
import ActivityScreen from "./screens/ActivityScreen";

export default function App() {
  return <ActivityScreen style={styles.container}></ActivityScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
