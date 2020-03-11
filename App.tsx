import React, { Component, ReactNode } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './src/pages/Home';
import { ResultScreen } from './src/pages/Result';

export default class App extends Component {

    // private styles = StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         backgroundColor: '#fff',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //     },
    // });

    // private onClick(): void {
    //     alert('You did it!');
    // }

    render(): ReactNode {

        const navigator = createStackNavigator({
            home: HomeScreen,
            result: ResultScreen
        });

        const Container = createAppContainer(navigator);

        return (
            <Container />

            // <View style={this.styles.container}>
            //     <Text>Open up App.tsx to start working on your app!</Text>
            //     <Button title={'Click on me!'} onPress={this.onClick} />
            // </View>
        );
    }
}