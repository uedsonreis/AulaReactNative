import React, { Component, ReactNode } from 'react'
import { StyleSheet, Text, StatusBar } from 'react-native'
import { Body, Button, Container, Content, Header, Input, Label, List, ListItem, Title } from 'native-base';

import { HomeHeader, HomeBody } from './view'

import { Calculation } from '../entities/calculation'
import { Actions } from './actions';

type Props = { navigation: any, screenProps?: any, children?: any }
type State = { calculation: Calculation }

export class HomeScreen extends Component<Props, State> implements Actions {

    constructor(props: Props) {
        super(props);

        this.state = {
            calculation: new Calculation()
        }
    }

    public setInCash(value: number): void {
        this.state.calculation.inCash = value
    }

    public setInstallmentValue(value: number): void {
        this.state.calculation.installmentValue = value
    }

    public setInstallmentsAmount(value: number): void {
        this.state.calculation.installmentsAmount = value
    }

    public setRate(value: number): void {
        this.state.calculation.rate = value / 100
    }

    public calculate(): void {
        console.log("Values: ", this.state.calculation);
        this.props.navigation.navigate('result', this.state.calculation);
    }

    static navigationOptions = () => {
        return { header: () => <HomeHeader /> }
    };

    render(): ReactNode {
        return <HomeBody actions={this} />
    }
}