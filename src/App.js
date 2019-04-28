import React from 'react';

class App extends React.Component {
  render() {
    const month = [];
    for (let i = 1; i < 30; i += 7) {
      const week = [];
      for (let j = i; j < i + 7 && j < 31; j++) {
        week.push(j);
      }
      month.push(week);
    }

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
