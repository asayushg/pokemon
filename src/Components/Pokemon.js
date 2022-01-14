import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ImageColors from 'react-native-image-colors';


const Pokemon = ({navigation, _id, name}) => {

    let image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + _id + '.png';
    const [bgColor, SetBgColor] = useState('#fff');

    useEffect(() => {
        const fetchColors = async () => {
        
            const result = await ImageColors.getColors(image, {
                fallback: '#fff',
                quality: 'low',
                pixelSpacing: 5,
                cache: true,
              })

              switch (result.platform) {
                case 'android':
                 SetBgColor(result.vibrant); 
                  break
                case 'web':
                  SetBgColor(result.lightVibrant);
                  break
                case 'ios':
                  SetBgColor(result.background);
                  break
              }

        }

        fetchColors()
    
    }, [])

    
    return (
        <TouchableOpacity 
        style={[styles.card, {backgroundColor: bgColor+ '90'}]} 
        onPress={() => navigation.navigate("Detail", { _id: _id})} 
        >
            <Image
                style={{width: 120, height: 120}}
                source={{uri: image}}
                />
            <Text style={styles.title}> {name} </Text>
            
        </TouchableOpacity>
    )

}


export default Pokemon;

const styles = StyleSheet.create({

    card:{
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems: 'center',
    },

    title: {
        color:'white',
        fontWeight: 'bold',
        fontSize: 18
    }


})