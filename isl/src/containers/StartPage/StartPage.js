import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import SetCard from "../../components/SetCard/SetCard";


/*
 * This is the container for the home page.
 * @author Phajsi, Simen
 * @returns The user home page.
 */
const StartPage = () => {
  // Three lists that are updated with data from backend when the page renders.

  // List of the users own sets.
  const [ExerciseSetList, setExerciseSetList] = useState([]);
  const [playId, setPlayId] = useState(null);

  /*    function getContent() {
    axios
      .get(http://localhost:8000/api/sets, {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }).then(
        axios.spread((...res) => {
          setExerciseSetList(res.data);
        })
      )
      .catch((e) => {
        return e;
      });
  }
   */
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
              onClick={() => {
                setPlayId(set.id);
              }}
            />
          );
        })}
      </>
    );
  };

  return (
    <div>
      {renderSwitch()}
    </div>
  );
};

export default StartPage;