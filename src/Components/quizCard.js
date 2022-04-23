import React, { useState, useEffect } from 'react';

export default function QuizCard(props) {

    const [answerElement , setAnswerElement] = useState([])

    useEffect(()=> {
        const mixAnswerArray = [...props.incorrectAnswers, props.correctAnswer].sort();

        const answer = mixAnswerArray.map(
        (answer,index) =>   <div className='answer' key={index} id={index}>
                                <h1>{answer}</h1>
                            </div>
        );

        setAnswerElement(answer);

    },[]);

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

    function decodeHtml(text) {
        const decodeText = document.createElement("textarea");
        decodeText.innerHTML = text;
        
        return decodeText.value;
    }

    return (

        <div className="quizCard-container" id={props.id}>
            <div className="quizCard-question-container">
                <h1>{props.id+1}. {decodeHtml(props.question)}</h1>
            </div>
            <div className="quizCard-answer-container" onClick={selectAnswer}> 
                {answerElement}
            </div>
        </div>

    )

}