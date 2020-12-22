import React, { useState } from "react";

import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
// import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default ZearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };
  console.log(results);
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text> {errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("₺")}
          title="Cost Effective"
          
        />
        <ResultsList
          results={filterResultsByPrice("₺₺")}
          title="Bit Pricer"
          
        />
        <ResultsList
          results={filterResultsByPrice("₺₺₺")}
          title="Big Spender"
          
        />
        <ResultsList
          results={filterResultsByPrice("₺₺₺₺")}
          title="Very Big Spender"
          
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
