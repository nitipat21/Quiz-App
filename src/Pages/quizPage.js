import React, { useEffect, useState } from 'react';
import QuizCard from '../Components/quizCard';
import ResultCard from '../Components/resultCard';
import SubmitBtn from '../Components/submitBtn';
import '../CSS/quizPage.css'

export default function QuizPage() {

    const [score,setScore] = useState(0);

    const [maxScore,setMaxscore] = useState(0);

    const [correctAnswer,setCorrectAnswer] = useState([]);

    const [isSubmit,setIsSubmit] = useState(false);
    
    const allQuizObj = JSON.parse(localStorage.getItem("quiz"));

    const allQuizArray = Array.from(allQuizObj);

    const quizElement = allQuizArray.map(
        
        (props,index) =>    <QuizCard
                                key={index}
                                id={index}
                                question={props.question} 
                                correctAnswer={props.correct_answer}
                                incorrectAnswers={props.incorrect_answers}
                                type={props.type}
                            />
    
    );

    useEffect(() => {

        correctAnswer.push(allQuizArray.map(props => props.correct_answer))

        localStorage.setItem("correctAnswer",JSON.stringify(correctAnswer));

    },[])

    useEffect(() => {
        
        if (isSubmit) {

            const quizContainer = document.querySelector(".quiz-containter");
            const correctAnswerArray = correctAnswer[0];

            quizContainer.childNodes.forEach(

                (quizCard,index) => {

                    const quizIndex = index;
                    
                    setMaxscore(prevScore=>prevScore+1);

                    quizCard.lastChild.childNodes.forEach(

                        answer => {

                            if ( answer.textContent === correctAnswerArray[quizIndex] ) {

                                if (answer.classList[1] === 'selected') {

                                    setScore(prevScore=>prevScore+1);
                                    answer.classList.add("correct");
                                    
                                } else {
                                    answer.classList.add("incorrect");
                                }

                            }

                        })
                }
            )
        }

    },[isSubmit])
    
    return (

        <main>
            <div className="quiz-containter">
                {quizElement}   
            </div>
            { isSubmit ? <ResultCard score={score} maxScore={maxScore}/> : <SubmitBtn handleChange={() => setIsSubmit(true)}/>}
        </main>

    )
}