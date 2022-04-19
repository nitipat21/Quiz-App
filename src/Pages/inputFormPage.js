import React, { useEffect, useState } from 'react';
import InputNumberOfQuiz from '../Components/inputNumberOfQuiz';
import InputSelectCategory from '../Components/inputSelectCategory';
import InputSelectDifficulty from '../Components/inputSelectDifficulty';
import InputSelectType from '../Components/inputSelectType';

export default function InputFormPage() {

    const [numberOfQuiz,setNumberOfQuiz] = useState(1);
    const [selectCategory, setSelectCategory] = useState("Any Category");
    const [selectDifficulty, setSelectDifficulty] = useState("Any Difficulty");
    const [selectType, setSelectType] = useState("Any Type");

    function updateNumberOfQuiz() {
        setNumberOfQuiz(previousNumber=> parseInt(previousNumber+1));
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

    React.useEffect(()=> console.log(numberOfQuiz , selectCategory, selectDifficulty, selectType))

    return(

        <main className='inputFromPage-main'>
            <div className="inputFormPage-content-container">
                <form>
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
                </form>
            </div>
        </main>

    )
}