import React from 'react';

export default function InputNumberOfQuiz(props) {

    return (

        <div className="numQuiz-container">
            <label>Number of Questions:</label>
            <input type='number' name='numQuiz' value={props.value} onChange={props.handleChange} min='1' max='50'/>
        </div>

    )

};