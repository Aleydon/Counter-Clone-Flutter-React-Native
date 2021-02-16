/* By: Roberto Aleydon */

import React, {useState} from 'react';
import { StatusBar, Text } from 'react-native';

import Header from './Header';
import { CenterCounter, FabView, AddText } from './style';






export default function Counter() {
    const [ counter, setCounter ] = useState(0);


    return (
        <>
            <StatusBar backgroundColor="#007fff"/>
            <Header />

            <CenterCounter>
                <Text>You have pushed the button this many times</Text>
                <Text style={{fontSize: 25}}>{counter}</Text>
            </CenterCounter>

            <FabView 
                activeOpacity={0.6}
                onPress={() => setCounter(counter + 1)}>
                <AddText>+</AddText>
            </FabView>
        </>
);
};



