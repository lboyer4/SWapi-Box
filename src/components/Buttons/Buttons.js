import React from 'react';
import './_Buttons.scss';

function Buttons({setCategory, favoriteCount}) {
	
	function handleClick(e) {     e.target.parentElement.querySelectorAll('button').forEach(button => {
      button.classList = ''
    })
    e.target.classList += 'active'
    setCategory(e.target.name)
	}

	return (
		<div className="Buttons">
			<button id="red-planet" name="people" onClick={handleClick}>People</button>
			<button id="orange-planet"name="planets" onClick={handleClick}>Planets</button>
			<button id="blue-planet" name="vehicles" onClick={handleClick}>Vehicles</button>
			<button id="green-planet" name="favorites" onClick={handleClick}>Favorites <span>{favoriteCount}</span></button>
			<button id="purple-planet" name="" onClick={handleClick}>Home</button>
		</div>
	)
}


export default Buttons;