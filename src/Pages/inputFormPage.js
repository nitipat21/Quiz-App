import React, { useEffect, useState } from 'react';
import InputNumberOfQuiz from '../Components/inputNumberOfQuiz';
import InputSelectCategory from '../Components/inputSelectCategory';
import InputSelectDifficulty from '../Components/inputSelectDifficulty';
import InputSelectType from '../Components/inputSelectType';
import SubmitBtn from '../Components/submitBtn';
import { useNavigate } from 'react-router-dom';
import '../CSS/inputFormPage.css';

export default function InputFormPage() {

    const navigate = useNavigate();
    const [numberOfQuiz,setNumberOfQuiz] = useState(1);
    const [selectCategory, setSelectCategory] = useState("");
    const [selectDifficulty, setSelectDifficulty] = useState("");
    const [selectType, setSelectType] = useState("");
    const [isSubmit,setIsSubmit] = useState(false);

    function updateNumberOfQuiz(event) {
        if (event.target.value>50) {
            setNumberOfQuiz(50);
        } else {
            setNumberOfQuiz(event.target.value);
        }
    }

    function updateSelectedCategory(event) {
        setSelectCategory(event.target.value);
    }

    function updateSelectedDifficulty(event) {
        setSelectDifficulty(event.target.value);
    }

    function updateSelectedType(event) {
        setSelectType(event.target.value);
    }

    function submit() {
        setIsSubmit(true);
    }

    useEffect(()=> {

        if (isSubmit) {

            const amount = `amount=${numberOfQuiz}`
            const category = selectCategory ? `&category=${selectCategory}` : "" ;
            const difficulty = selectDifficulty ? `&difficulty=${selectDifficulty}` : "" ;
            const type = selectType ? `&type=${selectType}` : "" ;
            const url = `https://opentdb.com/api.php?${amount}${category}${difficulty}${type}`;

            const fetchQuizAPI = async function() {
                    try {
                        const response = await fetch(url);
                        const data = await response.json();
                        
                       if (data.response_code === 0) {
                            localStorage.setItem("quiz",JSON.stringify(data.results));
                            localStorage.setItem("submit",false);
                            navigate('/quizPage');

                       } else {
                            navigate("/API Error");
                       }     

                    } catch(error) {
                        console.log(error);
                    }
            };

            fetchQuizAPI();
        }

    },[isSubmit])

    return(

        <main className='inputFromPage-main'>
            <div className="inputFormPage-content-container">
                <form onSubmit={ (event)=> event.preventDefault() }>
                    <InputNumberOfQuiz 
                        value={numberOfQuiz}
                        handleChange={updateNumberOfQuiz}
                    />
                    <InputSelectCategory
                        value={selectCategory}
                        handleChange={updateSelectedCategory}
                    />
                    <InputSelectDifficulty
                        value={selectDifficulty}
                        handleChange={updateSelectedDifficulty}
                    />
                    <InputSelectType
                        value={selectType}
                        handleChange={updateSelectedType}
                    />
                    <SubmitBtn handleChange={submit}/>
                </form>
            </div>
        </main>

    )
}