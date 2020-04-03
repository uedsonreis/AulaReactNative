import React, { Component, ReactNode } from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import { Body, Button, Container, Content, Header, Input, Label, List, ListItem, Title } from 'native-base';

import FormItem from './components/FormItem';

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

    private static styles = StyleSheet.create({
        header: {
            backgroundColor: '#222428'
        },
        calculateButton: {
            margin: 20
        },
        title: {
            color: 'white'
        }
    });

    private calculate(): void {
        console.log("Values: ", this.state.calculation);
        this.props.navigation.navigate('result', this.state.calculation);
    }

    static navigationOptions = () => {
        return { header: () => (
            <Header style={HomeScreen.styles.header}>
                <StatusBar barStyle="light-content" />
                <Body>
                    <Title style={HomeScreen.styles.title}>Como Pagar?</Title>
                </Body>
            </Header>
        )}
    };

    render(): ReactNode {
        const { calculation } = this.state;

        return (
            <Container>
                <Content>

                    <List>
                        <FormItem
                            label={'Valor à vista (R$):'}
                            setValue={ (value: number) => calculation.inCash = value }
                        />
                        <FormItem
                            label={'Quantidade de parcelas:'}
                            setValue={ (value: number) => calculation.installmentsAmount = value }
                        />
                        <FormItem
                            label={'Valor da parcela (R$):'}
                            setValue={ (value: number) => calculation.installmentValue = value }
                        />
                        <FormItem
                            label={'Rentabilidade (%):'}
                            setValue={ (value: number) => calculation.rate = value / 100 }
                        />
                    </List>

                    <Button style={HomeScreen.styles.calculateButton} onPress={() => this.calculate()} block>
                        <Text style={HomeScreen.styles.title}>Cálcular</Text>
                    </Button>
                </Content>

            </Container>
        );
    }
}