import React, { Component, ReactNode } from 'react'
import { Text, StatusBar } from 'react-native'
import { Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title } from 'native-base'

import { Actions } from './actions'
import styles from './styles'

export class ResultHeader extends Component<any, any> {
    render(): ReactNode {
        return (
            <Header style={styles.header}>
                <StatusBar barStyle="light-content" />

                <Left>
                    <Button onPress={() => this.props.navigation.goBack()} transparent>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>

                <Body>
                    <Title style={styles.title}>Resultado</Title>
                </Body>

                <Right />
            </Header>
        )
    }
}

export class ResultBody extends Component<{ actions: Actions }, any> {
    private result(): ReactNode {
        const { actions } = this.props

        if (actions.getEconomyInCash() >= actions.getEconomyInInstallments()) {
            return (
                <Text style={styles.textResult}>Compre à Vista</Text>
            );
        } else {
            return (
                <Text style={styles.textResult}>Compre a Prazo</Text>
            );
        }
    }

    render(): ReactNode {
        const { actions } = this.props

        return (
            <Container style={styles.container}>
                <Content style={{ margin: 10 }}>
                    <Card>
                        <CardItem header>
                            <Body style={styles.alignCenter}>
                                {this.result()}
                            </Body>
                        </CardItem>

                        <CardItem>
                            <Body style={styles.alignCenter}>
                                <Text style={styles.textValues}>
                                    Economia à vista: R$ {actions.getEconomyInCash().toFixed(2)}
                                </Text>
                                <Text style={styles.textValues}>
                                    Economia à prazo: R$ {actions.getEconomyInInstallments().toFixed(2)}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
            </Container>
        )
    }
}