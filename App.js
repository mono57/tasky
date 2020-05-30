import React from "react";
import { StyleSheet, Text, View, Checkbox, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from '@react-native-community/checkbox';

import tasks from "./data";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Tasky</Text>
    <Ionicons name="ios-add-circle" color="#FFF" size={32} />
  </View>
);

const Task = () => (
  <View style={styles.task}>
    <CheckBox />
    <Text>Lorem ipsum dolor sit amet.</Text>
  </View>
);

const EmptyScreenContainer = () => (
  <View style={styles.emptyContainer}>
    <Button title="Add new task" />
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Task />
      {!tasks && <EmptyScreenContainer />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 25,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#5A61F6",
    paddingVertical: 15,
    paddingHorizontal: 25,
    // marginTop: 25
  },
  headerTitle: {
    fontSize: 18,
    color: "#FFF",
  },
  task: {
    flexDirection: "row",
  },
});
