import React from "react";
import { View, SafeAreaView , Text, Button} from "react-native";
import styles from "./styles";

function Search({navigation}) {
  return  <View style={styles.container}>
  <SafeAreaView style={{ marginHorizontal: 24 }}>
     <Text>Hello, This is Search Screen</Text>
  </SafeAreaView>
</View>;
}

export default Search;
