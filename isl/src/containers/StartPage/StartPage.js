import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import SetCard from "../../components/SetCard/SetCard";

/**
 * This is the container for the home page.
 * @author Phajsi, Simen
 * @returns The user home page.
 */
const StartPage = () => {
  // Three lists that are updated with data from backend when the page renders.

  // List of the users own sets.
  const [ExerciseSetList, setExerciseSetList] = useState([]);

  const [showSetType, setShowSetType] = useState(0);

  // Used to redirect if the user has clicked on the play icon on a card.
  const [redirectPlay, setRedirectPlay] = useState(false);
  const [playId, setPlayId] = useState(null);

  /**
   * Sends three requests to backend to get necessary data.
   * First request gets the sets the user has made.
   * Second request gets the user's saved sets.
   * The third request gets the user's completed sets.
   */
  function getContent() {
    fetch(`http://localhost:8000/api/sets`)
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
  
  /* const onClickSet = (id) =>{
    console.log(id);
    console.log(playId);
    setPlayId(id);
    setRedirectPlay(true);
    console.log(':)');
    console.log(playId);
  } */

  // Returns the correct list of cards depending on what "tab" the user has chosen.
  const renderSwitch = () => {
    return (
      <>
        {ExerciseSetList.map((set) => {
          console.log(set.id);
          return (
            <SetCard
              type="mySet"
              formData={set}
              onClick={() => {
                setPlayId(set.id);
                setRedirectPlay(true);
              }}
            />
          );
        })}
      </>
    );
  };

  return (
    <div>
      {renderSwitch(showSetType)}
      {redirectPlay && (
        <Navigate
          to={{
            pathname: "/sets",
            state: { playId: playId },
          }}
        />
      )}
    </div>
  );
};

export default Home;