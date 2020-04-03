import React, { Component, ReactNode } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen } from './src/Home';
import { ResultScreen } from './src/Result';

export default class App extends Component<any, any> {

    render(): ReactNode {

        const navigator = createStackNavigator({
            home: HomeScreen,
            result: ResultScreen
        });

        const AppContainer = createAppContainer(navigator);

        return ( <AppContainer /> );
    }
}

// Atualizar o expo-cli # npm i -g expo-cli
// Instalar o expo-font # expo install expo-font
// Utilizar o TextInput no lugar dos inputs # import TextInput from 'react-native'
// Remover a font arial dos styles