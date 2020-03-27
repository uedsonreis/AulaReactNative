import React, { Component, ReactNode } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Calculation } from './entities/calculation';

export class ResultScreen extends Component<any, any> {

    private economyInCash: number;
    private economyInInstallments: number;

    constructor(props: any) {
        super(props);

        const calculation: Calculation = this.props.navigation.state.params;
        
        const values: number[] = calculation.calculate();
        
        this.economyInCash = values[0];
        this.economyInInstallments = values[1];
    }
    
    private styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    result(): ReactNode {
        if (this.economyInCash >= this.economyInInstallments) {
            return (<Text>Compre à Vista</Text>);
        } else {
            return (<Text>Compre a Prazo</Text>);
        }
    }

    render(): ReactNode {
        return (
            <View style={this.styles.container}>
                {this.result()}
                
                <Text>Economia à vista: R$ {this.economyInCash.toFixed(2)}</Text>
                <Text>Economia à prazo: R$ {this.economyInInstallments.toFixed(2)}</Text>
            </View>
        );
    }
}