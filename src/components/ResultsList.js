import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import ResultDetail from "./ResultDetail";

import {withNavigation } from '@react-navigation/compat';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title} - {results.length}{" "}
      </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity 
              onPress={() => navigation.navigate('Results',{id:item.id})}>
                <ResultDetail result={item} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
  container: {
    borderBottomWidth: 1,
    marginVertical: 5,
    borderColor: "rgb(222,222,222)",
  },
});

export default withNavigation(ResultsList);
