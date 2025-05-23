import { useState } from 'react';
import './App.css';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import Textarea from './components/Textarea';


function App() {

  const [mode, setMode] = useState('light')
  const toggleMode = (e) => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#000424"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"

    }
  }
  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggleModeFunc={toggleMode} />
      <div id="mainContainer" className="my-3 container">

        <Textarea mode={mode} heading="Format your text right away" />


      </div>


    </>
  );
}


export default App;
