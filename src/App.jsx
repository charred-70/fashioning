import { useState } from "react"
import { sendMessage } from './static/script.js'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

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
    </>)
}

export default App
