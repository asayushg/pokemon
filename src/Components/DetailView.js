import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ImageColors from 'react-native-image-colors';
import Abilities from './Abilities';
import GeneralInfo from './GeneralInfo';
import Stats from './Stats';

const DetailView = ({data}) =>{
    const _id = data.id;
    const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + _id + '.png';
    const [bgColor, SetBgColor] = useState('#fff');

    useEffect(() => {

        const fetchColors = async () => {
            if(!data.id) return
            const result = await ImageColors.getColors(image, {
                fallback: '#fff',
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

        fetchColors();
    
    }, [data])

    return(
        <View>
            <View style={[styles.container,{backgroundColor: bgColor+ '90'}]} >
                <Image
                    style={{width: 250, height: 250}}
                    source={{uri: image}}
                    />
            </View>
            <Abilities abilities={data.abilities} />
            <View style={styles.generalInfoContainer} >
                <GeneralInfo name={'Height'} value={data.height/10 + ' M'} color={bgColor} />
                <GeneralInfo name={'Weight'} value={data.weight/10 + ' KG'} color={bgColor} />
            </View>
            <Stats stats={data.stats} />
           
            
        </View>
    )

}

export default DetailView;

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        marginBottom: 16
    },

    generalInfoContainer:{
        flexDirection: 'row',
        margin: 8,
        marginTop: 16,
        justifyContent: 'space-evenly'
    }

})