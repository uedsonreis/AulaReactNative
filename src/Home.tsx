import React, { Component, ReactNode } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
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
            justifyContent: 'center',
        },
        title: {
            color: "#000",
            fontFamily: 'arial',
            fontSize: 20
        },
        calculateButton: {
            margin: 20
        },
        textButton: {
            fontFamily: 'arial'
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
                <input type="number" onChange={
                    // (e) => this.setState({ calculation: { ...calculation, inCash: Number(e.target.value) }})
                    (e) => calculation.inCash = Number(e.target.value)
                } />

                <Text style={this.styles.title}> Quantidade de parcelas: </Text>
                <input type="number" onChange={
                    // (e) => this.setState({ calculation: { ...calculation, installmentsAmount: Number(e.target.value) }})
                    (e) => calculation.installmentsAmount = Number(e.target.value)
                } />

                <Text style={this.styles.title}> Valor da parcela (R$): </Text>
                <input type="number" onChange={
                    // (e) => this.setState({ calculation: { ...calculation, installmentValue: Number(e.target.value) }})
                    (e) => calculation.installmentValue = Number(e.target.value)
                } />

                <Text style={this.styles.title}> Rentabilidade (%): </Text>
                <input type="number" onChange={
                    // (e) => this.setState({ calculation: { ...calculation, rate: Number(e.target.value)/100 }})
                    (e) => calculation.rate = Number(e.target.value) / 100
                } />

                <Button title="Cálcular" onPress={() => this.calculate()} />
            </View>
        );
    }
}