import React from 'react';

import StatelessFunctionalComponent from './StatelessFunctionalComponent';

// class means it's a full component that can have state and methods other than 'render'
export default class ClassComponent {

	// class components start with a constructor...

	// which has to call super with its props and can bind methods and other stuff we aren't going into here. Another time.

	// which can contain state...

	this.state = {
		thing1: 'lollipop',
		thing2: 'rhinoceros',
	};

	// lifecycle methods...
	componentDidMount() {
			console.log('I just mounted');
	};

	// random methods you create...
	randomMethodOfAwesomeness = () => {
		console.log('this is a random method of awesomeness')
	};

	// including random methods that can change this component's state...
	randomMethodToChangeState = () => {
		this.setState(() => ({ thing2: 'Eiffel Tower', thing3: 'cup of coffee' }));
	};

	// and random methods you can pass down to child components...
	takeControlOfTheWorld = () => {
		this.setState(() => ({
			thing1: 'my lollipop',
			thing2: 'my rhinoceros',
			thing3: 'my cup of coffee',
		}));
	};

	// and a render method containing JSX (not HTML even though it looks like it).
	render() {
		<div className = "full-component">
			<div className = "full-component__message">
				{'Click below to take control of the world'}
			</div>

			{/* props are passed down as attributes on the component */}
			<StatelessFunctionalComponent
				takeControlOfTheWorld = {this.takeControlOfTheWorld}
			/>


		</div>
	};
};
