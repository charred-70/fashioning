import { useState } from "react"
import { useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import NavBar from './Components/NavBar'
import Avatar from './Components/Avatar';
import Clothes from './Components/Clothes'

function App() {
  return (

    <div>

      <div className='title'>
        <h1 id='title'>Unchopify</h1>
      </div>

      <div className="button-container">
          <button className="wardrobe-btn">Discover your wardrobe with the chatbot!  
          ⋆｡°✩⋆｡°✩⋆｡°✩</button>

        <Link to="/chatbot">
          <button className="discover">Go to ChatBot!</button>
        </Link>
      </div>

      
    </div>


  )}

export default App
