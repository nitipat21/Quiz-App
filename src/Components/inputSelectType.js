import React from 'react';

export default function InputSelectType(props) {

    return (

        <div className="selectType-container">
            <label>Select Type:</label>
            <select value={props.value} onChange={props.handleChange}>
                <option value="">Any Type</option>
                <option value="Multiple Choice">Multiple Choice</option>
                <option value="True / False">True / False</option>
            </select>
        </div>

    )

};