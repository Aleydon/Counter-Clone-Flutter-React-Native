/* By: Roberto Aleydon */

import React from 'react';
import Header from './Header';
import { StatusBar, Text } from 'react-native';
import { CenterCounter } from './style';






export default function Counter() {
    return (
        <>
            <StatusBar backgroundColor="#007fff"/>
            <Header />
            <CenterCounter>
                <Text>You have pushed the button this many times</Text>
                <Text>0</Text>
            </CenterCounter>
        </>
);
};



