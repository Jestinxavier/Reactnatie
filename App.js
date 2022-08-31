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
  const [datas, setDatas] = useState([
    {name:"jestin",id:1,},
    {name:"jestin2",id:2,},
    {name:"jesti3",id:3,},
    {name:"jestin4",id:4,},
])
const [todo, setTod] =  useState([
  {text:"task one",id:1},
  {text:"task two",id:2},
  {text:"task three",id:3},
  {text:"task four",id:4},
]);
  const [listData, setListData] = useState(	[

    {
           quote:"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse",
           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANFZdVR-nGb0CDjq7fhsIP_FKXwD_6N-4fg&usqp=CAU'
          },
    {
           quote:"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill",
           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuz3FzcYamHisC2RTFaBeDKD43xacL3wgVWw&usqp=CAU'
          
          },
    {
           quote:"Strive not to be a success, but rather to be of value.","author":"Albert Einstein",
           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrm7NBecR30P6LzwIFpPeRLcBOMt7qOhkYgQ&usqp=CAU'
          
          },
    {
           quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy54qNIHXDT_cbr2Xlr6k51jZBlSyeBd5iJg&usqp=CAU"
          },
    {
           quote:"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale",
           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGeLtpjKbbTAFapMVf2qShx_z8PLRyAb-lsA&usqp=CAU'
          },
    {
           quote:"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky",
           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrm7NBecR30P6LzwIFpPeRLcBOMt7qOhkYgQ&usqp=CAU'
          
          },
    {
           quote:"Change your thoughts and you change your world.","author":"Norman Vincent Peale",
           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxPUAfP7TTGbL5LkYYxJCzuGTolXGnj2cfA&usqp=CAU'
          
          },
    {
           quote:"Either write something worth reading or do something worth writing.","author":"Benjamin Franklin",
           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrm7NBecR30P6LzwIFpPeRLcBOMt7qOhkYgQ&usqp=CAU'
          
          },
   
    ]);
  const [note, setNote] = useState(
    "Either write something worth reading or do something worth writing."
  );
  const handleClick = () => {
    setRequest("Hi Hi Hi");
  };
  const handleNote = (value) => {
    console.log(value, "value");
    setNote(value);
  };
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
  const lists = listData.map((data) => (
    <View style={{ margin: 9 }}>
      <View style={[styles.box, styles.evalve,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}]}>
        <Image
         style={{width: 100, height: 100}}
        source={{uri:data.image}}
      />
        <Text>{data.quote}</Text>
        <View style={styles.replay}>
        </View>
      </View>
    </View>
  ));
  const prehandler = (id)=>{
    console.log(id,"prehandler");
    setDatas((prepeople)=>{
      return prepeople.filter(stateDatas=>stateDatas.id != id)
    })
  }
   
  return (
    <View style={styles.container}>
      {/* <ScrollView>
        <View style={{...styles.container,...{marginTop:50}}}>
          <View style={styles.Header}>
            <Text>Hi <Text style={{color:"red"}}>Jimbruten</Text></Text>
          </View>
          <View style={[styles.box, styles.evalve]}>
            <Text>{note}</Text>
            <View style={styles.replay}>
              <Text style={{ color: "green" }}>{request}</Text>
            </View>
          </View>
          <View style={{ margin: 9 }}>
            <TextInput
              keyboardType="twitter"
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "pink",
                minHeight: 80,
                minWidth: "90%",
              }}
              onChangeText={(value) => handleNote(value)}
              multiline
              placeholder="eg: ener enthelum..."
            />
          </View>
          <View>
            <Button title="Update" onPress={handleClick} />
          </View>
        </View>
        <View style={{}}>{lists}</View>
      </ScrollView> */}
      {/* <View>
      
      <FlatList 
      numColumns={2}
      data={datas}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=> prehandler(item.id)}>
      <View style={{ margin: 9 }}>
        <View style={[styles.box, styles.evalve,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}]}>
      <Text>{item.name}</Text>
      </View>
      </View>
      </TouchableOpacity>
      )}
      />
    
     
    </View> */}
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
    // alignItems: "center",
    // justifyContent: "center",
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
