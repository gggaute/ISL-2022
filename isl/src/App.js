import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlaySets from "./containers/Playsets/PlaySets";
import StartPage from './containers/StartPage/StartPage';

function App(){
  return(
    <Router>
    <Routes>
        <Route exact path="/" element={<StartPage />}/>
        <Route exact path="/sets" element={<PlaySets />} />
    </Routes>
    </Router>
  );
};

export default App;
