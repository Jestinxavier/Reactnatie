import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,FlatList, TouchableOpacity
} from "react-native";
import Header from "./components/Header"
import Todo from "./components/Todo"
import Addtodo from "./components/addtodo"

export default function App() {
  const [request, setRequest] = useState("");

const [todo, setTod] =  useState([
  {text:"task one",id:1},
  {text:"task two",id:2},
  {text:"task three",id:3},
  {text:"task four",id:4},
]);
  const [note, setNote] = useState(
    "Either write something worth reading or do something worth writing."
  );
  

  const pressHandler = (key)=>{
    setTod((prestate)=>{
      return prestate.filter(todo=>todo.id!=key);
    })
  } 
  const addtododata = (val)=>{
    setTod((prestate)=>{
      return [{text:val,id:Math.random()},
        ...prestate
      ]
    })
  }


   
  return (
    <View style={styles.container}>
    <Header />

      <View style={styles.content}>
      <Addtodo addtododata={addtododata} />
      <View style={styles.list}>

        <FlatList 
        data={todo}
        renderItem={({item})=>(<Todo item={item} pressHandler={pressHandler}/>)}
        />
      </View>

      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Header: {
    borderBottomWidth: 1,
  },
  box: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    // width: '100%',
    marginVertical: 10,
    marginHorizontal: 10,
    display: "flex",
  },
  evalve: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  list:{marginTop:20},
  content:{padding:40},
  replay: { alignItems: "center", textAlign: "center", marginTop: 10 },
});
