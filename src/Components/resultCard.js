import React from 'react';
import {useNavigate ,Link } from 'react-router-dom'

export default function ResultCard(props) {

    function backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

    return (

        <div className="result-container">
            <h1>Your Score: {props.score} / {props.maxScore}</h1>
            <button onClick={backToTop}>Review</button>
        </div>

    )

}