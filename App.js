import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import MovieExplorer from './src/components/MovieExplorer'
import MovieDetail from './src/components/MovieDetail'

const RootStack = StackNavigator(
    {
        Home: {
            screen: MovieExplorer,
        },
        Detail: {
            screen: MovieDetail
        }
    },
    {
        initialRouteName: 'Home'
    }
)

export default class App extends Component {
    render() {
        return (<RootStack />)
    }
} 