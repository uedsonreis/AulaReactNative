import React, { Component, ReactNode } from "react";
import { StyleSheet } from 'react-native';
import { Button, Content, Input, Label, List, ListItem, Text, Container, Header, Body, Title } from 'native-base';

import { Calculation } from "../../model/calculation";
import { StatusBar } from "react-native";

type State = { calculation: Calculation };

export class HomeScreen extends Component<any, State> {

    static styles = StyleSheet.create({
        header: { backgroundColor: "#222428" },
        title: { color: "white", fontFamily: 'arial' },
        calculateButton: { margin: 20 },
        textButton: { fontFamily: 'arial' }
    });

    constructor(props: any) {
        super(props);
        this.state = { calculation: new Calculation() };
    }

    calculate(): void {
        console.log("Cálculo: ", this.state.calculation);

        this.state.calculation.calculate();

        this.props.navigation.navigate('result', {
            economyInCash: this.state.calculation.economyInCash,
            economyInInstallments: this.state.calculation.economyInInstallments
        });
    }

    static navigationOptions = () => {
        return { header: () => (
            <Header style={HomeScreen.styles.header}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Body>
                    <Title style={HomeScreen.styles.title}> Como Pagar? </Title>
                </Body>
            </Header>
        ) };
    };

    render(): ReactNode {
        const { calculation } = this.state;

        return (
            <Container>
                <Content>

                    <List>
                        <ListItem>
                            <Label> Valor à vista (R$): </Label>
                            <Input onChangeText={text => calculation.inCash = Number(text)} />
                        </ListItem>
                        <ListItem>
                            <Label> Quantidade de Parcelas: </Label>
                            <Input onChangeText={text => calculation.installmentsNumber = Number(text)} />
                        </ListItem>
                        <ListItem>
                            <Label> Valor da Parcela (R$): </Label>
                            <Input onChangeText={text => calculation.installmentValue = Number(text)} />
                        </ListItem>
                        <ListItem>
                            <Label> Rentabilidade (%): </Label>
                            <Input onChangeText={text => calculation.rate = Number(text)/100 } />
                        </ListItem>
                    </List>
        
                    <Button onPress={() => this.calculate()} style={HomeScreen.styles.calculateButton} block>
                        <Text style={HomeScreen.styles.textButton}>Calcular</Text>
                    </Button>

                </Content>
            </Container>
        );
    }

}