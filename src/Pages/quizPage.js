import React from 'react';
import QuizCard from '../Components/quizCard';

export default function QuizPage() {
    
    const quizObj = JSON.parse(localStorage.getItem("quiz"));
    const quizElement = Array.from(quizObj).map(
        
        (props,index) =>    <QuizCard
                                key={index}
                                id={index}
                                question={props.question} 
                                correctAnswer={props.correct_answer}
                                incorrectAnswer={props.incorrect_answer}
                            />
    
    )

    return (

        <main>
            <div className="quiz-containter">
                <h1>Hello</h1>
                {quizElement}
            </div>
        </main>

    )
}