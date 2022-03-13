import './App.css';
import ContentContainer from './components/ContentContainer';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import egg from './components/img/egg.png'


function App() {

  return (
    <div className="container">
      <Navbar></Navbar>
      <ContentContainer ></ContentContainer>
      {/* <MainPage></MainPage> */}
    </div>
  );
}

export default App;