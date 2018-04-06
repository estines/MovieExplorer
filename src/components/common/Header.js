import React, { Component } from 'react'
import { Header, Title, Left, Right, Body } from 'native-base'

export const AppTitle = ({ title }) => {
    return (
        <Header>
            <Left />
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right />
        </Header>
    )
}
