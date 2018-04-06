import React, { Component } from 'react'
import { ScrollView, Text, TextInput } from 'react-native'

const Test = () => (<Text>Hello</Text>)

export default class extends Component {
    render() {
        return (
            <ScrollView>
                <Text>Homepages</Text>
                <TextInput />
                <Test />
            </ScrollView>
        )
    }
}
