import React from 'react';
import {useNavigate ,Link } from 'react-router-dom'

export default function ResultCard(props) {

    const navigate = useNavigate();

    function backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

    return (

        <div className="result-container">
            <h1>Your Score: {props.score} / {props.maxScore}</h1>
            <div className="result-btn-container">
                <h1 className='review' onClick={backToTop}>Review</h1>
                <h1 className='exit' onClick={()=> navigate("/")}>Exit</h1>
            </div>
        </div>

    )

}