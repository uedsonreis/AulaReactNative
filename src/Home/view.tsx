import React, { Component, ReactNode } from 'react'
import { Body, Button, Container, Content, Header, Input, Label, List, ListItem, Title } from 'native-base'
import { Text, StatusBar } from 'react-native'

import FormItem from '../components/FormItem'
import { Actions } from './actions'
import styles from './styles'

export class HomeHeader extends Component<any, any> {
    render(): ReactNode {
        return (
            <Header style={styles.header}>
                <StatusBar barStyle="light-content" />
                <Body>
                    <Title style={styles.title}>Como Pagar?</Title>
                </Body>
            </Header>
        )
    }
}

export class HomeBody extends Component<{ actions: Actions }, any> {

    render(): ReactNode {
        const { actions } = this.props;
        
        return (
            <Container>
                <Content>

                    <List>
                        <FormItem
                            label={'Valor à vista (R$):'}
                            setValue={(value: number) => actions.setInCash(value)}
                        />
                        <FormItem
                            label={'Quantidade de parcelas:'}
                            setValue={(value: number) => actions.setInstallmentsAmount(value)}
                        />
                        <FormItem
                            label={'Valor da parcela (R$):'}
                            setValue={(value: number) => actions.setInstallmentValue(value)}
                        />
                        <FormItem
                            label={'Rentabilidade (%):'}
                            setValue={(value: number) => actions.setRate(value / 100)}
                        />
                    </List>

                    <Button style={styles.calculateButton} onPress={() => actions.calculate()} block>
                        <Text style={styles.title}>Cálcular</Text>
                    </Button>
                </Content>

            </Container>
        )
    }
}