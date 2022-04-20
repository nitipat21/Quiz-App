import React from 'react';

export default function QuizCard(props) {

    return (

        <div className="quizCard-container" id={props.id}>
            <div className="quizCard-question-container">
                <h1>{props.question}</h1>
            </div>
            <div className="quizCard-answer-container">
                <div className="multiple-answer">
                <h1>{props.correctAnswer}</h1>
                <h1>{props.incorrectAnswer}</h1>
                </div>
                <div className="boolean-answer">
                    
                </div>
            </div>
        </div>

    )

}