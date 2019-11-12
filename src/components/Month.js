import React from 'react';
import '../css/Month.css';

export const Month = (props) => {
    return (
        <table style={{tableLayout: 'fixed'}}>
            <caption>{`Month${props.index}`}</caption>
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
                {props.month.map(week => {
                    return (
                        <tr>{week.map(day => <td>{day}</td>)}</tr>
                    );
                })}
            </tbody>
        </table>
    );
}
