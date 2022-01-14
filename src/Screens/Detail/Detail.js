import React, {useEffect, useState} from "react";
import { View, SafeAreaView, Text, ActivityIndicator } from "react-native";
import { getPokemonInfo } from "../../Api/ApiService";
import DetailView from "../../Components/DetailView";
import styles from "./styles";

function Detail({ route, navigation }) {
  const { _id } = route.params;
  
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({ });

  const getData = ()=> {
    setIsLoading(true);
    const result = getPokemonInfo(_id);
    result.then(response => {
      setIsLoading(false);
      setData(response.data);
      navigation.setOptions({
        title: response.data.name,
      })
    })
    .catch(error => {
        setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  },[])

  return (
    <View style={styles.container}>
        {isLoading ? <View style={styles.loader} >
          <ActivityIndicator size={'large'} />
          </View> 
          : <DetailView data={data} /> }
    </View>
  );
}

export default Detail;
