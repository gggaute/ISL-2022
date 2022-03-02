import logo from './logo.svg';
import './App.css';
import UnlockPad from './unlockPad';
import egg from './egg.jpg';
import { useState } from 'react';

function App() {
  const [state, setState] = useState();
  let property = {correctSolution: "egg", letters: ["e","g","g","a","b","c","d","f","h"], image: egg}
  console.log(property)

  return (
    <div className="App">
      <UnlockPad input={property} />
    </div>
  );
}

export default App;
