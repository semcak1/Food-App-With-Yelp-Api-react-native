import React from "react";

import { View, StyleSheet, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View>      
      <View style={styles.backgroundStyle}>
        <Feather style={styles.iconStyle} name="search"  />
        <TextInput
          placeholder="Search"
          style={styles.inputText}
          autoCapitalize="words"
          autoCorrect={false}
          value={term}
          onChangeText={newTerm => onTermChange(newTerm)}
          onEndEditing={()=>{onTermSubmit()}}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "rgb(225,225,225)",
    height: 50,
    margin: 15,
    borderRadius: 5,
    flexDirection: "row",
  },
  inputText: {
    fontSize: 20,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
  },
});
