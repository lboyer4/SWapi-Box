import React from 'react';
import './_Buttons.scss';

function Buttons({setCategory}) {
	function handleClick(e) {     e.target.parentElement.querySelectorAll('button').forEach(button => {
      button.classList = ''
    })
    e.target.classList += 'active'
    setCategory(e.target.name)
	}

	return (
		<div className="Buttons">
			<button name="people" onClick={handleClick}>People</button>
			<button name="planets" onClick={handleClick}>Planets</button>
			<button name="vehicles" onClick={handleClick}>Vehicles</button>
			<button name="favorites" onClick={handleClick}>Favorites</button>
			<button name="" onClick={handleClick}>Home</button>
		</div>
	)
}


export default Buttons;