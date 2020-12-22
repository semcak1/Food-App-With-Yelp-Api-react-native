import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageView}  source={{ uri: result.image_url ? result.image_url : null }} />
      <Text style={styles.nameView}>{result.name}</Text>
      <View>
        <Text>
          {result.rating} Stars, {"  "} {result.review_count} Reviews{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal:12,
  },
  imageView: {
    width: 350,
    height: 200,
    
    borderRadius: 5,
  },
  nameView: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResultDetail;
