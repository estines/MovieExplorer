import React, { Component } from 'react';
import { Container, Content, Spinner } from 'native-base'
import { AppTitle, ItemList } from './common'
const rootURL = 'https://www.omdbapi.com/'

export default class MovieExplorer extends Component {
    state = {
        moviesList: []
    }

    componentDidMount() {
        this.getMovieList()
    }

    getMovieList = async (keyword = 'batman') => {
        let url = `${rootURL}?apikey=3f1288a7&s=${keyword}`
        let data = await fetch(url).then(raw => raw.json())
        this.setState({
            moviesList: data.Search.map(movie => movie)
        })
    }

    render() {
        return (
            <Container>
                <AppTitle title="Movie Explorer" />
                <Content>
                    {this.state.moviesList.length !== 0 ? this.state.moviesList.map(item => {
                        return (<ItemList name={item.Title} key={item.imdbID} img={item.Poster} />)
                    }) : <Spinner color='blue' />}
                </Content>
            </Container>
        )
    }
}