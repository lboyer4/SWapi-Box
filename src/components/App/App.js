import React, { Component } from 'react';
import './_App.scss';
import NavBar from '../NavBar/NavBar.js';
import Scroll from '../Scroll/Scroll.js';
import Buttons from '../Buttons/Buttons.js'

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

    const categoryUrls = ['https://swapi.co/api/people']
    const ious = categoryUrls.map(url => {
      return fetch(url).then(response => response.json())
    })
    
    const allPromises = Promise.all(ious)
      allPromises.then(data => 
        data[0].results
      .map(person=> {
        const {name, homeworld, species} = person
        const newPerson = {name}
        fetch(homeworld)
          .then(response => response.json())
          .then(homeworld => {
            newPerson.homeworld= homeworld.name; 
            newPerson.worldPopulation= homeworld.population;
          })

        console.log(newPerson)
      }))
    
  }


  

  findFilm = (films) => {
    return films[Math.floor(Math.random() * films.length)]
  }


  render() {
    const scroll = this.state.film.opening_crawl

    return(
      <main>
        <NavBar />
        <Buttons />
        <Scroll film={this.state.film} />

      </main>
      )
  }
}


export default App;
