import React from 'react';
import QuizCard from '../Components/quizCard';
import SubmitBtn from '../Components/submitBtn';
import '../CSS/quizPage.css'

export default function QuizPage() {
    
    const quizObj = JSON.parse(localStorage.getItem("quiz"));
    const quizElement = Array.from(quizObj).map(
        
        (props,index) =>    <QuizCard
                                key={index}
                                id={index}
                                question={props.question} 
                                correctAnswer={props.correct_answer}
                                incorrectAnswers={props.incorrect_answers}
                                type={props.type}
                            />
    
    )

    return (

        <main>
            <div className="quiz-containter">
                {quizElement}
                <SubmitBtn />
            </div>
        </main>

    )
}