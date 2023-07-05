import logo from './logo.svg';
import './App.css';
import Policies from './Policies'
import { useState } from 'react';
import Alert from './Alert';

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
      <Alert alert={alert} />
      <Policies showAlert={showAlert}/>
     
    </div>
  );
}

export default App;
