import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from "react"

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({ msg: message, type: type })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert('Dark mode has been enabled', 'success');
      document.title = "TextUtils_99-Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled', 'success')
      document.title = "TextUtils_99-Light Mode";
    }
  }

  return (
    <>
      <Navbar title="TextUtils_99" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
    </>
  );
}

export default App;
