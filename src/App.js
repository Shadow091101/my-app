import { useState } from 'react';
import './App.css';
import Abouut from './components/Abouut';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [switchTextMode, setSwitchTextMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setSwitchTextMode('light')
      document.body.style.backgroundColor = '#270d50'
      showAlert("Dark Mode has been enabled", 'success')
      
    }
    else {
      setMode('light')
      setSwitchTextMode('dark')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", 'success')
      
    }
  }
  return (
    <>
      <Router>

        <Navbar title='MyCoolApp' mode={mode} toggleMode={toggleMode} switchTextMode={switchTextMode} aboutText='About Us' />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            {/* always put the exact keyword so it will take to the specified endpoint */}
            <Route exact path='/about' element={<Abouut />} />
            <Route exact path='/' element={<TextFrom showAlert={showAlert} heading='Enter the text:' mode={mode} />} />
          </Routes>

          
        </div>
        
      </Router>
    </>
  );
}

export default App;
