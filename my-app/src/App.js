import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Matthew', age: 18 },
			{ name: 'Manu', age: 19 },
			{ name: 'Kimberly', age: 16 },
			{ name: 'Alyssa', age: 19 }
		],
		otherState: 'some other state'
	};

	switchNameHandler = (newName) => {
		// console.log('Was clicked!');
		this.setState({
			persons: [
				{ name: newName, age: 48 },
				{ name: 'Kimberly', age: 46 },
				{ name: 'Caleb', age: 21 },
				{ name: 'Alyssa', age: 19 }
			]	
		});
	};

	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Del', age: 48 },
				{ name: event.target.value, age: 46 },
				{ name: 'Caleb', age: 21 },
				{ name: 'Alyssa', age: 19 }
			]	
		});
	};

	render() {
		const style = {
			backgroundColor: 'yellow',
			border: '1px solid blue',
		  font: 'inherit',
			padding: '8px',
			curson: 'pointer'
		};

		return (
			<div className="App">
			<h1>Hi, I'm a React App</h1>
			<p>This is really working!</p>
			<button 
				style={style}
				onClick={() => this.switchNameHandler('Max!!')}>Switch Name</button>
			<Person 
				name={this.state.persons[0].name} 
				age={this.state.persons[0].age} />
			<Person 
				name={this.state.persons[1].name} 
				age={this.state.persons[1].age} 
				click={this.switchNameHandler.bind(this,'Matthew')} 
				changed={this.nameChangeHandler} >My Hobbies: Cycling, Photograpy</Person>
			<Person 
				name={this.state.persons[2].name} 
				age={this.state.persons[2].age} />
			<Person 
				name={this.state.persons[3].name} 
				age={this.state.persons[3].age} />
			</div>
		);
	}
}

export default App;


