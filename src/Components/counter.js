/* By: Roberto Aleydon */

import React, {useState} from 'react';
import Header from './Header';
import { StatusBar, Text } from 'react-native';
import { CenterCounter, FabView, AddText } from './style';






export default function Counter() {
    const [ counter, setCounter ] = useState(0);


    return (
        <>
            <StatusBar backgroundColor="#007fff"/>
            <Header />

            <CenterCounter>
                <Text>You have pushed the button this many times</Text>
                <Text>{counter}</Text>
            </CenterCounter>

            <FabView onPress={() => setCounter(counter + 1)}>
                <AddText>+</AddText>
            </FabView>
        </>
);
};



