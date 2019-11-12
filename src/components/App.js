import React from 'react';
import { Month } from './Month';
import { populateYear } from '../util/months';
import '../css/App.css';

class App extends React.Component {
	render() {
		const year = populateYear(2020);

		return (
			<div className="container">
				<h1>Sticker Calendar</h1>
				<p>What is your goal?</p>
				<select>
					<option value="exercise">Exercise</option>
					<option value="novel">Work on your novel</option>
					<option value="instrument">Practice a musical instrument</option>
					<option value="sweets">Avoid sweets</option>
				</select>
				<br/>
				<br/>
				{year.map((month, index) => <Month month={month} index={index + 1}/>)}
			</div>
		);
	}
}

export default App;
