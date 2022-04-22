import React, { useState } from 'react';

export default function QuizCard(props) {

    const mixAnswerArray = [...props.incorrectAnswers, props.correctAnswer].sort();

    const AnswerElement = mixAnswerArray.map(
        (answer,index) =>   <div className='answer' key={index} id={index}>
                                <h1>{answer}</h1>
                            </div>
    );

    function selectAnswer(event) {

        const allAnswer = event.currentTarget.childNodes;
        const selectedAnswer = event.target;

        allAnswer.forEach(
            
            node => {
                if ( node.textContent === selectedAnswer.textContent ) {
                    node.classList.add("selected");
                } else {
                    node.classList.remove("selected");
                }
            }
            
        );

    }

    return (

        <div className="quizCard-container" id={props.id}>
            <div className="quizCard-question-container">
                <h1>{props.id+1}. {props.question}</h1>
            </div>
            <div className="quizCard-answer-container" onClick={selectAnswer}> 
                {AnswerElement}
            </div>
        </div>

    )

}