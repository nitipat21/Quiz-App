import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../CSS/errorPage.css'

export default function ErrorPage() {

    const navigate = useNavigate();

    return (

        <main>
            <div className="error-container">
                <div className="error-header">
                    <h1>Error 404 Not Found</h1>
                </div>
                <div className="error-info">
                    <p>We can not provide all questions you need or URL direction is wrong. <br></br>Please come back to home page again.</p>
                </div>
                <div className="error-btn-container">
                    <button className='homeBtn' onClick={() => navigate('/')}>Return Home</button>
                </div>
            </div>
        </main>

    )

}