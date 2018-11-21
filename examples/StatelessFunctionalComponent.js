import React from 'react';

// a stateless functional component implicitly returns what you would put in the render function of a class component.
// it also behaves exactly like the render method of a class component.
// the only new rules are that it can't access state or lifecycle methods.

// The plus side is that it is a lot lighter than a class-based component.

const StatelessFunctionalComponent = (props) => (

	{/* again, everything needs to be contained within one root element */}
	<div>

		{/* render methods have access to props... */}
		<span>{'This is how many legs a dragon has:'} {props.howManyLegsADragonHas} </span>

		{/* and can call methods that were passed down to them as props. This is the simplest way to move data upwards. */}
		<button
			onClick = {props.changeState}
		>
			{'Make the dragon a Pirate'}
		</button>
	</div>
);

export default StatelessFunctionalComponent;
