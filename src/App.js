import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
let name = "Sameer"

function App() {
  const [mode,setMode]= useState("light");
  const [alertText,setAlertText]= useState(null);
  const  showAlert = (message,type) =>{
         setAlertText({
          msg : message,
          type : type
         })
         setTimeout(()=>{
             setAlertText(null);
         },2000)
  }
  const toggleMode = () =>{
  if(mode === "light"){
    setMode('dark');
    document.body.style.backgroundColor= "#021433"
    showAlert("Dark Mode Enabled" , "success");
    document.title = 'TextUtils Home - Dark'
  }
  else{
    setMode('light');
    document.body.style.backgroundColor= "white"
    showAlert("Light Mode Enabled" , "success");

  }
  }
  return (
    <>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alertText}/>
<div className='container'>
<TextForm heading="Heading" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
{/* <About/> */}
</div>
</>
  );
}

export default App;
