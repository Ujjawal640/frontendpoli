import logo from './logo.svg';
import './App.css';
import Policies from './Policies'
import { useState } from 'react';

function App() {
  const [alert, setAlert] =useState(null);
  const showAlert= (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2500);
    }
  return (
    <div >
      <Policies showAlert={showAlert}/>
     
    </div>
  );
}

export default App;
