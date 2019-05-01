import React, { Component } from 'react';
import './_App.scss';
import NavBar from '../NavBar/NavBar.js';
import Scroll from '../Scroll/Scroll.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {}
    }
  }

  componentDidMount = () => {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(result => {
        const film = this.findFilm(result.results);
        this.setState({ film });
      })
      .catch(error => console.log(error))
  }

  findFilm = (films) => {
    return films[Math.floor(Math.random() * films.length)]
  }


  render() {
    const scroll = this.state.film.opening_crawl

    return(
      <main>
        <NavBar />
        <Scroll film={this.state.film} />
      </main>
      )
  }
}


export default App;
