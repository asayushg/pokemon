import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';


const StatView = ({name}) =>{

    const [width, setWidth] = useState(new Animated.Value(0));

    const [value, v] = useState(getRandomInt(40, 250));
    let text = value + '/250';

    const barStyles = {
        backgroundColor: getBackgroundColor(),
        height: 20,
        width: width,
        borderRadius: 16
      };

      useEffect(() => {
        Animated.timing(width, {
            toValue: value,
            duration: 500,
            useNativeDriver: false
          }).start();
      }, [])

    return(
        <View style={styles.container} >
            <Text style={styles.stat} >{name}</Text>
            <Animated.View style={barStyles} />
            <Text style={styles.stattext} >{text}</Text>
        </View>
    )

}

export default StatView;

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        marginStart: 16,
        marginBottom: 12,
        flexDirection: 'row'
    },

    stat:{
        fontWeight: '600',
        fontSize: 12,
        width: 30,
        color: 'gray',
        marginRight: 8,
    },

    stattext:{
        fontWeight: '600',
        fontSize: 12,
        color: 'gray',
        marginLeft: 8,
    },

})

function getBackgroundColor(){
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}