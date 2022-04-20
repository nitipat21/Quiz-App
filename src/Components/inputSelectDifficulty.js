import React from 'react';

export default function InputSelectDifficulty(props) {

    return (

        <div className="selectDifficulty-container">
            <label>Select Difficulty:</label>
            <select value={props.value} onChange={props.handleChange}>
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>

    )

};