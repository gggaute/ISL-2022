import React, { useState, useEffect } from "react";
import SetCard from "../../components/SetCard/SetCard";
import NavBar from "../../components/NavBar/Navbar";
import { Paper } from "@mui/material";
import exerciseStyles from '../../components/exerciseStyle';
import axios from 'axios';


/**
 * This is the container for the home page.
 * @author Group 2021
 * @returns The user home page.
 */
const StartPage = () => {
  // Two lists that are updated with data from backend when the page renders.

  // List of the users own sets.
  const [ExerciseSetList, setExerciseSetList] = useState([]);


  /* Objects that take both the global style between all
  exercises, to integrate style objects into the classes object
  to be used in the component */
  const classesBase = exerciseStyles();
  const classes = {...classesBase };

  /**
   * Fetches content, i.e. all sets, from backend.
   * @variable data is then added to the state setExerciseSetList().
   * @param {object} data The data of all sets.
   */
  function getContent() {
    axios
      .get(`/api/sets`, {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }).then((res) => {
          setExerciseSetList(res.data);
        })
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
              formData={set}
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
      <Paper className={classes.root} id="rootStart">
        {renderSwitch()}
      </Paper>
    </div>
  );
};

export default StartPage;