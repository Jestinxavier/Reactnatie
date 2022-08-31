import React from "react";
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
export default function Todo({item,pressHandler}) {
  return (
    <TouchableOpacity onPress={()=>pressHandler(item.id)}>
      
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: " #bbb ",
    borderWidth: 1, 
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
