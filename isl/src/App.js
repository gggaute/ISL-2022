import './App.css';
import ContentContainer from './components/ContentContainer';
import Navbar from './components/Navbar';


function App() {
  let property = {correctSolution: "egg", letters: ["e","g","g","a","b","c","d","f","h"], image: egg}


  return (
    <div className="container">
      <Navbar></Navbar>
      <ContentContainer ></ContentContainer>
    </div>
  );
}

export default App;