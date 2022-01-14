import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const GeneralInfo = ({name, value, color}) => {

    return(
        <View>
            <Text style={[styles.value,{color: color}]} >
                {value} 
            </Text>
            <Text style={styles.title} >
                {name}
            </Text>
        </View>
    )

}

export default GeneralInfo;

const styles = StyleSheet.create({

   title: {
        textAlign:'center',
        fontSize: 12,
        color:'gray'
   },

   value: {
        textAlign:'center',
        fontSize: 20,
   }

})