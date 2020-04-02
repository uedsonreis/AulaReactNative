import React, { Component, ReactNode } from 'react';

import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { Calculation } from './entities/calculation';

type Props = { navigation: any, screenProps?: any, children?: any };
type State = { calculation: Calculation };

export class HomeScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            calculation: new Calculation()
        }
    }

    private styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        title: {
            color: "#000",
            fontSize: 20
        },
        calculateButton: {
            margin: 20
        },
        textInput: {
            height: 30,
            width: '85%',
            textAlign: "center"
        }
    });

    private calculate(): void {
        console.log("Values: ", this.state.calculation);
        this.props.navigation.navigate('result', this.state.calculation);
    }

    render(): ReactNode {
        const { calculation } = this.state;

        return (
            <View style={this.styles.container}>

                <Text style={this.styles.title}> Valor à vista (R$): </Text>
                <TextInput keyboardType='numeric' style={this.styles.textInput} onChangeText={
                    (value) => calculation.inCash = Number(value)
                } />

                <Text style={this.styles.title}> Quantidade de parcelas: </Text>
                <TextInput keyboardType='numeric' style={this.styles.textInput} onChangeText={
                    (value) => calculation.installmentsAmount = Number(value)
                } />

                <Text style={this.styles.title}> Valor da parcela (R$): </Text>
                <TextInput keyboardType='numeric' style={this.styles.textInput} onChangeText={
                    (value) => calculation.installmentValue = Number(value)
                } />

                <Text style={this.styles.title}> Rentabilidade (%): </Text>
                <TextInput keyboardType='numeric' style={this.styles.textInput} onChangeText={
                    (value) => calculation.rate = Number(value) / 100
                } />

                <Button title="Cálcular" onPress={() => this.calculate()} />
            </View>
        );
    }
}