import React, { Component, ReactNode } from 'react';

import { Input, Label, ListItem } from 'native-base';

type Props = { label: string, setValue: Function };

export default class FormItem extends Component<Props, any> {

    render(): ReactNode {
        const { label, setValue } = this.props;

        return (
            <ListItem>
                <Label> {label} </Label>
                <Input keyboardType='numeric' onChangeText={
                    (value) => setValue(Number(value))
                } />
            </ListItem>
        );
    }

}