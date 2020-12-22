import React,{useState,useEffect} from "react";
import { View, StyleSheet, Text,FlatList ,Image,ScrollView} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const id = route.params.id;
  const [result, setResult] = useState(null);
  console.log(result)

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result){
      return null;
  }
  return (
    <View style={{flex:1}}>
      <Text>{result.name}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem= {({item})=>{
            return (
            <ScrollView>
                 <Image style ={styles.image} source={{uri:item}} />
            </ScrollView>
           
            )
        }}
         />
    </View>
  );
};

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
});

export default ResultsShowScreen;
