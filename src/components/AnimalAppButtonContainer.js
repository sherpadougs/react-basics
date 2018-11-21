import React from 'react';

// a stateless functional component implicitly returns what you would put in the render function of a class component.
const AnimalAppButtonContainer = (props) => (
	<div className = "animal-app-button-container">
		<button
			className = "animal-app-buttons__change-state-button"
			onClick = {props.randomMethodToChangeState}
		>
			{'Update state for no reason'}
		</button>

		<button
			className = "animal-app-buttons__catch-everything-button"
			onClick = {props.catchEverything}
		>
			Become a zookeper
		</button>

		<button
			className = "animal-app-buttons__reset-button"
			onClick = {props.resetState}
		>
			Reset State, kind of
		</button>
	</div>
);

export default AnimalAppButtonContainer;


// components update when their props or their state changes.
