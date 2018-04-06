import React, { Component } from 'react'
import { Card, CardItem, Text, Thumbnail, Left, Right, Body, Icon } from 'native-base'

export const ItemList = ({ name, img }) => {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail
                        square
                        source={{ uri: img }}
                    />
                </Left>
                <Body>
                    <Text>{name}</Text>
                </Body>
                <Right>
                    <Icon name='arrow-forward' />
                </Right>
            </CardItem>
        </Card>
    )
}