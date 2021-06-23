import {useState} from 'react'

import Views from './components/Views'
import Inputs from './components/Inputs'

import './App.css';

function App() {
  const [currentStatus, setCurrentStatus] = useState("current info")
  return (
    <div className="App">
      <header className="App-header">
        <Inputs 
        name=""
        age=""
        hobbies=""/>
        <Views />
      </header>
    </div>
  );
}

export default App;
