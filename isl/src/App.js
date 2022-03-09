import './App.css';
import ContentContainer from './components/ContentContainer';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className="container">
      <Navbar></Navbar>
      <ContentContainer ></ContentContainer>
    </div>
  );
}

export default App;