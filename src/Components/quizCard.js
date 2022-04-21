import React, { useState } from 'react';

export default function QuizCard(props) {

    const selectAnswerStyles = {
        backgroundColor: "#000000de",
        color: "#ffffffde"
    }

    const mixAnswerArray = [...props.incorrectAnswers, props.correctAnswer].sort();

    const AnswerElement = mixAnswerArray.map(
        (answer,index) =>   <div className='answer' key={index}>
                                <h1>{answer}</h1>
                            </div>
    );

    return (

        <div className="quizCard-container" id={props.id+1}>
            <div className="quizCard-question-container">
                <h1>{props.id+1}. {props.question}</h1>
            </div>
            <div className="quizCard-answer-container"> 
                {AnswerElement}
            </div>
        </div>

    )

}