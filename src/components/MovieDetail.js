import React, { Component } from 'react'
import { Container, Content } from 'native-base'

export default class MovieDetail extends Component {
    state = { 
        details = {}
    }

    getMovieDetail = async id => {
        let url = `${rootURL}?apikey=3f1288a7&i=${id}&plot=short&r=json`
        let data = await fetch(url).then(raw => raw.json())
        this.setState({
            details: data
        })
    }

    render() {
        return (
            <Container>

            </Container>
        )
    }
}