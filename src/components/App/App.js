import React, { Component } from 'react';
import './_App.scss';
import NavBar from '../NavBar/NavBar.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Scroll from '../Scroll/Scroll.js';
import Buttons from '../Buttons/Buttons.js'
import { fetchCategories } from '../apiCalls/apiCalls.js';
import { fetchHomeWorld } from '../apiCalls/apiCalls.js';
import { fetchSpecies } from '../apiCalls/apiCalls.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      people: [],
      planets:[],
      vehicles:[],
      favorites: [],
      category: ''
    }
  }

  componentDidMount = () => {
    const ious = fetchCategories();
    Promise.all(ious)
    .then(data => {
      this.makePeople(data[0].results)
      this.makePlanets(data[1].results)
      this.makeVehicles(data[2].results)
    });
  }

  makeVehicles = (vehicles) => {
    vehicles = vehicles.map((vehicle, index) => {
      return this.makeVehicle(vehicle, index)
    })
    this.setState( {vehicles} )

  }

  makeVehicle = (vehicle, index) => {
    const {name, model, vehicle_class, passengers} = vehicle;
    return {name, model, vehicle_class, passengers, id: (Date.now()+index+300)}
  }

  makePlanets = (planets) => {
    const result = planets.map((planet, index) => {
      return this.makePlanet(planet, index)
    })
    Promise.all(result)
    .then(planets => {
      this.setState( { planets })
    })
  }

  makePlanet = (planet, index) => {
    const {name, terrain, population, climate, residents} = planet;
    return {name, terrain, population, climate, residents: residents.length, id: (Date.now()+index+100)};
  }

  makePeople = (people) => {
    const result = people.map((person, index) => {
      return this.makePerson(person, index)
    })
    Promise.all(result)
    .then(people => {
      this.setState({ people })
    });
  }

  makePerson = (person, index) => {
    const {name, homeworld, species} = person;
    const newPerson = {name, id: (Date.now()+index)};
    const pendingPromises=[fetchHomeWorld(homeworld), fetchSpecies(species)];
    return Promise.all(pendingPromises)
    .then(promises => {
      newPerson.homeworld = promises[0].name; 
      newPerson.worldPopulation = promises[0].population;
      newPerson.species = promises[1].name; 
      return newPerson
    }); 
  }

  setCategory = (category) => {
    this.setState({category: category})
  }

  addFavorite = (id) => {
    const {people, planets, vehicles, favorites} = this.state;
    const isAlreadyFavorited = favorites.find(favorite => {
     return favorite.id === id
    })
    if (isAlreadyFavorited) return;
    const newFavorite = [...people, ...planets, ...vehicles].find(element => {
      return element.id === id; 
    })
    this.setState( {favorites: [...favorites, newFavorite]})
  }

  removeFavorite = (id) => {
    let {favorites} = this.state;
    favorites = favorites.filter(favorite => {
      return favorite.id !== id 
    })
    this.setState( { favorites })
  }

  render() {
    const cardContainer= <CardContainer 
          things={this.state[this.state.category]}
          addFavorite={this.addFavorite}
          removeFavorite={this.removeFavorite}
         />
    const crawl = <Scroll />   
    let show = (this.state.category) ? cardContainer : crawl;

    return(
      <main>
        <NavBar />
        <Buttons 
          setCategory={this.setCategory}
          favoriteCount={this.state.favorites.length} />
        {show}
      </main>
      )
  }
}


export default App;
