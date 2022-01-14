import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

const Abilities = (prop) => {

    return(
        <View style={styles.container} >
            <FlatList
                horizontal={true}
                data={prop.abilities}
                renderItem={(item) => (<Text style={[styles.ability, { backgroundColor: getBackgroundColor()}]} >{item.item.ability.name}</Text>)}
                marginStart={16}
                keyExtractor={item => item.ability.name}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Abilities;

const styles = StyleSheet.create({

    container:{
        justifyContent: 'center',
        flexDirection: 'row'
    },

    ability:{
        fontSize: 18,
        backgroundColor: '#147efb',
        textAlign: 'center',
        marginEnd: 8,
        borderRadius: 16,
        padding: 4,
        paddingLeft: 32,
        paddingRight: 32,
        overflow: 'hidden',
        color: 'white',
        marginBottom: 4
    }

})

function getBackgroundColor(){
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}