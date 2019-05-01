import React, { Component } from 'react';
import './_Scroll.scss';


class Scroll extends Component {
	constructor() {
		super();
		this.state = {
			text: ''
		}
	}



	render() {
		return( 
			<section className="scroll-page">
				<div className="scroll-element">
					<div className="crawl">
						<h3 className="scroll-text">
							{this.props.film.opening_crawl}			
						</h3>
						<h2 className='scroll-title'> {this.props.film.title} </h2>
						<h4 className='scroll-release'>{this.props.film.release_date} </h4>
					</div>
				</div>
			</section>
			)
	}
}

export default Scroll;