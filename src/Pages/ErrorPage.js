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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </div>
                <div className="error-btn-container">
                    <button className='homeBtn' onClick={() => navigate('/')}>Return Home</button>
                </div>
            </div>
        </main>

    )

}