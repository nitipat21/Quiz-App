import React from 'react';
import allExport from './Pages/allExport';
import './CSS/style.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"

export default function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<allExport.FirstPage />} />
        <Route path='/inputForm' element={<allExport.InputFormPage />} />
        <Route path='/quizPage' element={<allExport.QuizPage />} />
        <Route path='*' element={<allExport.ErrorPage />} />
      </Routes>
    </BrowserRouter>

  )

}
