import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import StatView from './StatView';

const Stats = ({stats}) =>{

    console.log(stats);

    return (
        <View style={styles.container} > 
            <Text style={styles.title} >Base Stats</Text>
            <FlatList 
                data={stats}
                renderItem={(item) => {
                    return <StatView name={getName(item.item.stat.name)} />
                }}
                keyExtractor={item => item.item}
            />
        </View>
    )

}

export default Stats;

const styles = StyleSheet.create({

    container:{
        marginTop: 16,
    },

    title:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 16
    },

})

function getName(name) {
 
    if(name === 'hp') return 'hp';
    if(name === 'attack') return 'atk';
    if(name === 'defense') return 'def';
    if(name === 'special-attack') return 'spa';
    if(name === 'special-defense') return 'spd';
    return 'exp';

}