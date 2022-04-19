import React from 'react';

export default function InputSelectDifficulty(props) {

    return (

        <div className="selectDifficulty-container">
            <label>Select Difficulty:</label>
            <select value={props.value} onChange={props.handleChange}>
                <option value="">Any Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
        </div>

    )

};