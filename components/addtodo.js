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
import { Colors } from "react-native/Libraries/NewAppScreen";
function addtodo({ addtododata }) {
  const [text, setText] = useState("");
  const handleChange = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="add Todo"
        onChangeText={handleChange}
        style={style.input}
      />
      <Button
      
        title="Add Todo"
        onPress={() => {
          addtododata(text);
        }}
      />
    </View>
  );
}

export default addtodo;
const style = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
