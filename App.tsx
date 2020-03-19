import React, { Component, ReactNode } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './src/pages/Home';
import { ResultScreen } from './src/pages/Result';

export default class App extends Component<any, any> {

    render(): ReactNode {

        const navigator = createStackNavigator({
            home: HomeScreen,
            result: ResultScreen
        });

        const Container = createAppContainer(navigator);

        return (
            <Container />
        );
    }
}