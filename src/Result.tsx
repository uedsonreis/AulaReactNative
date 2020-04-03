import React, { Component, ReactNode } from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';

import { Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title } from 'native-base';

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
    
    private static styles = StyleSheet.create({
        container: { backgroundColor: '#f2f2f2' },
        textResult: { fontWeight: 'bold', fontSize: 32, color: 'green' },
        textValues: { fontSize: 24 },
        title: { color: 'white' }
    });

    result(): ReactNode {
        if (this.economyInCash >= this.economyInInstallments) {
            return (
                <Text style={ResultScreen.styles.textResult}>Compre à Vista</Text>
            );
        } else {
            return (
                <Text style={ResultScreen.styles.textResult}>Compre a Prazo</Text>
            );
        }
    }

    static navigationOptions = (props: any) => {
        return { header: () => (
            <Header style={{ backgroundColor: '#222428' }}>
                <StatusBar barStyle="light-content" />

                <Left>
                    <Button onPress={() => props.navigation.goBack()} transparent>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>

                <Body>
                    <Title style={ResultScreen.styles.title}>Resultado</Title>
                </Body>

                <Right />
            </Header>
        )}
    };

    render(): ReactNode {
        return (
            <Container style={ResultScreen.styles.container}>
                <Content style={{ margin: 10 }}>
                    <Card>
                        <CardItem header>
                            <Body style={{ alignItems: 'center' }}>
                                {this.result()}
                            </Body>
                        </CardItem>

                        <CardItem>
                            <Body style={{ alignItems: 'center' }}>
                                <Text style={ResultScreen.styles.textValues}>
                                    Economia à vista: R$ {this.economyInCash.toFixed(2)}
                                </Text>
                                <Text style={ResultScreen.styles.textValues}>
                                    Economia à prazo: R$ {this.economyInInstallments.toFixed(2)}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
            </Container>
        );
    }
}