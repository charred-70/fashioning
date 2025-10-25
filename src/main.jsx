import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Avatar from './Components/Avatar.jsx';
import './index.css'
import App from './App.jsx'
import NavBar from './Components/NavBar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <NavBar/>
      <Routes>
        <Route path='/avatar' element={<Avatar/>}/>
        <Route path='/' element={<App />}/>
      </Routes> 
    </BrowserRouter>
  </StrictMode>,
)
