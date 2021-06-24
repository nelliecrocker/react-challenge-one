import { useState } from 'react'

import Views from './components/Views'
import Inputs from './components/Inputs'

import './App.css';

function App() {

  //creating the state needed  
  const [name, setName] = useState("Nellie")
  const [age, setAge] = useState("32")
  const [hobbies, setHobbies] = useState("remodeling, cooking")


  return (
    <div className="App">
      <header className="App-header">
        {/* View */}
        <Views name={name} age={age} hobbies={hobbies} />

        {/* inputs */}
        <Inputs setName={setName} setAge={setAge} setHobbies={setHobbies}/>
        

      </header>
    </div>
  );
}

export default App;
