import React, { Component } from 'react';
import './_Scroll.scss';
import { fetchFilms } from '../apiCalls/apiCalls.js';



class Scroll extends Component {
	constructor() {
		super();
    this.state = {
      title: '',
      opening_crawl:'',
      release_date: '',
      errorStatus:'' 
		};
	}

	componentDidMount = () => {
		return fetchFilms()
			.then(result => {
      	const film = this.findFilm(result.results);
      	const { title, opening_crawl, release_date } = film;
        this.setState({ title, opening_crawl, release_date });
      })
      .catch(error => console.log(error))
	}
	  findFilm = (films) => {
    return films[Math.floor(Math.random() * films.length)]
  }

	render() {
		return( 
			<section className="scroll-page">
				<div className="scroll-element">
					<div className="crawl">
						<h2 className='scroll-title'> {this.state.title} </h2>
						<h3 className="scroll-text">
							{this.state.opening_crawl}			
						</h3>
						<h4 className='scroll-release'>{this.state.release_date} </h4>
					</div>
				</div>
			</section>
			)
	}
}

export default Scroll;