import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todo</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 19,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize:20,
    // height:30,
  },
});
