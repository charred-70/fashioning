import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar'
import Avatar from './Components/Avatar';
import Clothes from './Components/Clothes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Unchopify</h1>
      <Link to="/avatar">
        <button class='discover'>Discover your Style!</button>
      </Link>
      <Link to="/chatbot">
        <button class='discover'>Go to ChatBot!</button>
      </Link>
    </>
  )
}

export default App
