import React, { useEffect, useState } from "react";
import { View, SafeAreaView , Button, Text, ActivityIndicator} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { getPokemons } from "../../Api/ApiService";
import Pokemon from "../../Components/Pokemon";
import styles from "./styles";

function Home({navigation}) {

  const [page, setPage] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = ()=> {
    setIsLoading(true);
    const result = getPokemons(page);
    result.then(response => {
      let res= [];
      pokemonList.map((item) =>{ 
        res.push(item);
      })
      response.data.results.map((item) => {
        res.push(item);
      })
      setPokemonList(res);
      setIsLoading(false);
    })
    .catch(error => {
        setPage(page - 1);
        setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  const handleEndReached = () => {
      setPage(page + 1);
      getData();
  }

  const renderFooterLoader = () =>{
    return (
      isLoading ? <View style={styles.loader}>
        <ActivityIndicator size={'large'}  />
      </View> : null
    )
  }

  return  <View style={styles.container}>
  <SafeAreaView>
    <FlatGrid
      itemDimension={150}
      data={pokemonList}
      renderItem={({ item }) => ( <Pokemon navigation={navigation} _id={getIdFromItem(item.url)} name={item.name}/>)}
      onEndReached={handleEndReached}
      ListFooterComponent={renderFooterLoader}
    />
    
  </SafeAreaView>
</View>;
}

export default Home;

const getIdFromItem = (url) => {
  let ans = null
  if(url) ans = url.split('/').filter(Boolean).pop()
  return ans;
}

