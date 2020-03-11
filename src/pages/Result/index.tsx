import React, { Component, ReactNode } from "react";
import { StyleSheet, StatusBar } from 'react-native';
import { Button, Icon, Header, Body, Title, Left, Right, Container, Content, Card, CardItem, Text } from 'native-base';

export class ResultScreen extends Component<any, any> {

    static styles = StyleSheet.create({
        header: { backgroundColor: "#222428" },
        title: { color: "white", fontFamily: 'Arial' },
        container: { backgroundColor: "#f2f2f2" },
        totalValue: { fontWeight: "bold", fontFamily: 'arial' }
    });

    constructor(props: any) {
        super(props);

        const economyInCash = this.props.navigation.state.params.economyInCash;
        const economyInInstallments = this.props.navigation.state.params.economyInInstallments;

        this.state = { economyInCash, economyInInstallments };
    }

    private getCardHeaderText(economyInCash: number, economyInInstallments: number): string {
        if (economyInCash > economyInInstallments) {
            return "Compre à Vista!";
        } else {
            return "Compre a Prazo!";
        }
    }

    static navigationOptions = ({ navigation }) => {
        return { header: () => (
            <Header style={ResultScreen.styles.header}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                
                <Body>
                    <Title style={ResultScreen.styles.title}> Resultado </Title>
                </Body>
                
                <Right />
            </Header>
        )};
    };

    render(): ReactNode {
        const { economyInCash, economyInInstallments } = this.state;

        return (
            <Container style={ResultScreen.styles.container}>
                <Content>

                    <Card>
                        <CardItem header>
                            <Body>
                                <Text style={ResultScreen.styles.totalValue}>
                                    {this.getCardHeaderText(economyInCash, economyInInstallments)}
                                </Text>
                            </Body>
                        </CardItem>
                        
                        <CardItem>
                            <Body>
                                <Text style={ResultScreen.styles.totalValue}>
                                    Economia à vista: R$ {economyInCash.toFixed(2)}
                                </Text>
                                <Text style={ResultScreen.styles.totalValue}>
                                    Economia à prazo: R$ {economyInInstallments.toFixed(2)}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
            </Container>
        );
    }
}