import React from 'react';
import { populateMonth } from '../util/months';

class App extends React.Component {
	render() {
		const month = populateMonth(30, 'monday');

		return (
			<div>
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
				<table style={{tableLayout: 'fixed'}}>
					<caption>April 2019</caption>
					<thead>
						<tr>
							<th>Sunday</th>
							<th>Monday</th>
							<th>Tuesday</th>
							<th>Wednesday</th>
							<th>Thursday</th>
							<th>Friday</th>
							<th>Saturday</th>
						</tr>
					</thead>
					<tbody>
						{month.map(week => {
							return (
								<tr>{week.map(day => <td>{day}</td>)}</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
