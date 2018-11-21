import React from 'react';

import StatelessFunctionalComponent from './StatelessFunctionalComponent';

// class means it's a full component that can have state and methods other than 'render'
class AnimalApp extends React.Component {

	// in React 16, state is simply an object in the component
	state = {
		thing1: 'dragon',
		thing2: 'unicorn',
	};

	// lifecycle methods...
	componentDidUpdate() {
		console.log('My dragon is afraid of marshmallows');
	};


	// random methods you create...
	sayUnicornsAreCool = () => {
		console.log('unicorns are cool');
	};


	// including random methods that can change this component's state...
	changeState = () => {
		this.setState(() => ({
			thing1: 'pirate captain',
		}));
	}

	// and a render method containing JSX (not HTML even though it looks like it).
	render() {
		const howManyLegsADragonHas = 4;

		return (

			{/* inside a render method, everything must be contained in one root element... */}
			<div>

			{/* in which you can put things that you want to render... (yes, really) */}
				<span>Hi mom</span>

				{/* ... and where you can nest other components that you import, which become 'children' of this one. */}
				<StatelessFunctionalComponent
					sayUnicornsAreCool = {this.sayUnicornsAreCool}
					changeState = {this.changeState}
					howManyLegsADragonHas = {howManyLegsADragonHas}
				/>

			</div>
		);
	};
};

export default AnimalApp;
