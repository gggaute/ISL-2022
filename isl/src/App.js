import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlaySets from "./containers/PlaySets/PlaySets";
import StartPage from './containers/StartPage/StartPage';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from "@emotion/react";

/**
 * TODO
 */
export const theme = createTheme({
  palette: {
    primary: {
      main: '#7CA3EE'
    },
    secondary: {
      main: '#7CA3EE'
    }
  }

})

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/sets" element={<PlaySets />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;