import React, { useState, useEffect } from "react";
import SetCard from "../../components/SetCard/SetCard";
import NavBar from "../../components/NavBar/Navbar";
import { Paper } from "@mui/material";
import exerciseStyles from '../../components/exerciseStyle';


/*
 * This is the container for the home page.
 * @author Phajsi, Simen
 * @returns The user home page.
 */

const StartPage = () => {
  // Two lists that are updated with data from backend when the page renders.

  // List of the users own sets.
  const [ExerciseSetList, setExerciseSetList] = useState([]);
  const [playId, setPlayId] = useState(null);

  const classesBase = exerciseStyles();
  const classes = {...classesBase };

  function getContent() {
    fetch('http://localhost:8000/api/sets')
      .then((response) => response.json())
      .then((data) => setExerciseSetList(data))
      .catch((e) => {
        return e;
      });
  }

  // Only runs once when the page renders and gets the necessary content from backend.
  useEffect(() => {
    getContent();
  }, []);

  // Returns the correct list of cards depending on what "tab" the user has chosen.
  const renderSwitch = () => {
    return (
      <>
        {ExerciseSetList.map((set) => {
          return (
            <SetCard
              type="mySet"
              formData={set}
              playId={playId}
              setId={set.id}
            />
          );
        })}
      </>
    );
  };

  return (
    <div>
      <NavBar></NavBar>
      <Paper className={classes.root}>
        {renderSwitch()}
      </Paper>
    </div>
  );
};

export default StartPage;