import * as React from "react";
import { View, Text, StyleSheet, AppRegistry } from "react-native";
import App from "./App";

const styles = StyleSheet.create({
  window: {
    margin: 10,
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
    borderStyle: "dotted",
    maxWidth: 375,
    backgroundColor: "#000"
  },
  statusBar: {
    height: 35,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusBarItem: {
    color: "#fff"
  },
  app: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const rootTag = document.getElementById("root");
AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag });
