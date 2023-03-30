import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const handledarkmode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#161515';
      showAlert("Dark mode enabled!","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled!","success");
    }
  }
  return (
    <BrowserRouter>
    <Navbar title="TextUtils"  mode={mode} handledarkmode={handledarkmode} />
    <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<TextForm heading="Enter your text in the box :" showAlert={showAlert} mode={mode}/>} />
        <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
