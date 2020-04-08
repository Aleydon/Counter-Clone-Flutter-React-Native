/* By: Roberto Aleydon */

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';




export default function Counter() {
    return (
        <View style={styles.container}>
            <Text>Roberto Aleydon</Text>
        </View>
);
};



const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})