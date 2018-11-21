import React from 'react';

import AnimalAppButtonContainer from './AnimalAppButtonContainer';

// class means it's a full component that can have state and methods other than 'render'
class AnimalApp extends React.Component {

	// in React 16, state is simply an object in the component
	state = {
		thing1: 'monkey',
		thing2: 'rhinoceros',
	};

	// lifecycle methods...
	componentDidMount() {
		this.randomMethodOfAwesomeness();
	};

	// [deprecated lifecycle methods still work, but please don't use]
	// componentWillMount() {
	// 	console.log('WILL MOUNT');
	// }

	// random methods you create...
	randomMethodOfAwesomeness = () => {
		console.log('this is a random method of awesomeness')
	};

	// including random methods that can change this component's state...
	randomMethodToChangeState = () => {
		this.setState(() => ({ thing2: 'rare purple rhinoceros', thing3: 'horde of baboons' }));
		
		console.log('state has been changed, randomly.');
	};

	resetState = () => {
		this.setState(() => ({
			thing1: 'monkey',
			thing2: 'rhinoceros',
		}));

		console.log('state has been reset.');
	}

	// and random methods you can pass down to child components...
	catchEverything = () => {
		this.setState(() => ({
			thing1: 'my monkey',
			thing2: 'my rhinoceros',
			thing3: 'my horde of baboons',
		}), () => {
			console.log('All done.');
		});
	};

	// and a render method containing JSX (not HTML even though it looks like it).
	render() {
		return (
			<div className = "full-component">

				<div className = "full-component__show-state">
					{'This is what is currently in state: '}
					<ol>
					{Object.values(this.state).map((item, index) => {
						return (
							<li
								key = {index}
							>
								<span
									className = "full-component__show-state__item"
								>
								{item}
								</span>
							</li>
						)
					}) }
					</ol>
				</div>

				<div className = "full-component__message">
					{'Click below to become a zookeeper'}
					</div>

					{/* props are passed down as attributes on the component */}
					<AnimalAppButtonContainer
						catchEverything = {this.catchEverything}
						randomMethodToChangeState = {this.randomMethodToChangeState}
						resetState = {this.resetState}
					/>

			</div>
		)
	};
};

export default AnimalApp;
