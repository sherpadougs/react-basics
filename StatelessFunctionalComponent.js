import React form 'react';

// a stateless functional component implicitly returns what you would put in the render function of a class component.
const StatelessFunctionalComponent = (props) => (
	<div className = "stateless-functional-component">
		<button
			className = "stateless-functional-component__button"
			onClick = {props.takeControlOfTheWorld}
		>
			Become a dictator
		</button>
	</div>
);

export default StatelessFunctionalComponent;


// components update when their props or their state changes.
