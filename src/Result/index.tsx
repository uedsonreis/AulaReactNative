import React, { Component, ReactNode } from 'react'

import { Calculation } from '../entities/calculation'

import { Actions } from './actions'
import { ResultBody, ResultHeader } from './view';

export class ResultScreen extends Component<any, any> implements Actions {

    private economyInCash: number;
    private economyInInstallments: number;

    constructor(props: any) {
        super(props);

        const calculation: Calculation = this.props.navigation.state.params;
        
        const values: number[] = calculation.calculate();
        
        this.economyInCash = values[0];
        this.economyInInstallments = values[1];
    }

    public getEconomyInCash(): number {
        return this.economyInCash
    }

    public getEconomyInInstallments(): number {
        return this.economyInInstallments
    }

    static navigationOptions = (props: any) => {
        return { header: () => (
            <ResultHeader navigation={props.navigation} />
        )}
    }

    render(): ReactNode {
        return (<ResultBody actions={this} />)
    }
}