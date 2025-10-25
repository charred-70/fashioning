import { useState } from "react"
import { sendMessage } from './static/script.js'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar'
import Avatar from './Components/Avatar';
import Clothes from './Components/Clothes'

function App() {
  return (<>
        <div id = "chat">

          
          <img id = "pin1" src = "coat.png"></img>
          <img id = "pin2" src = "coat.png"></img>
          <img id = "pin3" src = "coat.png"></img>

          <img id = "result" src = "woman_standing.png"></img>
        </div>
      <input type="text" id="message" placeholder="Type a message..." />
      <button onClick= { sendMessage }> Send </button>
      <script src="{{ url_for('static', filename='script.js') }}">
      </script>

      <h1>Unchopify</h1>
      <Link to="/avatar">
        <button class='discover'>Discover your Style!</button>
      </Link>
      <Link to="/chatbot">
        <button class='discover'>Go to ChatBot!</button>
      </Link>

    </>)
}

export default App
