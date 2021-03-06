import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../CSS/firstPage.css'

export default function FirstPage() {

    const navigate = useNavigate();

    const linkToInputFormPage = function(){
        return navigate('/inputForm');
    }

    return (

        <main className="firstPage-main">
            <div className="firstPage-content-container">
                <div className="firstPage-header">
                    <h1>Quiz App</h1>
                </div>
                <div className="firstPage-description">
                    <p> Welcome to Quiz-App 
                        <br></br> 
                        Enter to the next page to select questions you want.
                    </p>
                </div>
                <div className="firstPage-btn">
                    <button onClick={linkToInputFormPage}>Enter</button>
                </div>
            </div>
        </main>

    )

}