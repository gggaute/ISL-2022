import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Forstaelse from "../../components/Forstaelse/Forstaelse";
import Chat from "../../components/Chat/Chat";
import RyddeSetninger from "../../components/RyddeSetninger/RyddeSetninger";
import Feedback from "../../components/Feedback/Feedback";
import axios from "axios";
import FillInWord from "../../components/Fill-In-Word/FillInWord";
import Unlock from "../../components/Unlock/Unlock";
import OverviewPage from '../../components/OverviewPage/OverviewPage'
/**
 * This is the container for playing exercise sets.
 * @author Group 2021
 * @returns A set of exercises.
 */
const PlaySets = () => {
  const location = useLocation();

  // Stepper for switching between exercises in the set.
  const [step, setStep] = useState("overview");

  // Id for the exercise being played.
  const [exerciseId, setExerciseId] = useState(0);

  // Id and title for the exercise set containing the exercises.
  const [id, setId] = useState(null);
  const [title, setTitle] = useState(null);

  // Trackers for progress bar and feedback pages
  const [totalScore, setTotalScore] = useState(0);
  const [totalExercises, setTotalExercises] = useState(0);
  const [feedbackState, setFeedbackState] = useState(false);
  const [exerciseProgress, setExerciseProgress] = useState(0);
  const [listOfExerciseTypes, setExerciseTypes] = useState([]);

  // Lists of id's for the exercises in the set.
  const [formDataExercises] = useState({
    chat: [],
    forstaelse: [],
    ryddeSetninger: [],
    lasoppmobil: [],
    drainnmanglendeord: [],
  });

  /**
   * The function will turn the response object from the API endpoint into a
   * playlist with exercise IDs. The playlist will be stored as an object with
   * three lists, one for each exercise type. Only exercise types with an ID will be
   * added, and other data will be ignored.
   * @param {object} sets An object containing sets from backend.
   */
  function createPlayList(sets) {
    formDataExercises.chat.length = 0;
    formDataExercises.forstaelse.length = 0;
    formDataExercises.ryddeSetninger.length = 0;
    formDataExercises.lasoppmobil.length = 0;
    formDataExercises.drainnmanglendeord.length = 0;
    Object.entries(sets).forEach(([exercise, id]) => {
      if (exercise.substring(0, 4) === "chat" && id) {
        formDataExercises.chat.push(id);
        if (!listOfExerciseTypes.includes(" Chat")) {
          setExerciseTypes(listOfExerciseTypes => [...listOfExerciseTypes, " Chat"]);
        }
      } else if (exercise.substring(0, 4) === "fors" && id) {
        formDataExercises.forstaelse.push(id);
        if (!listOfExerciseTypes.includes(" Forståelse")) {
          setExerciseTypes(listOfExerciseTypes => [...listOfExerciseTypes, " Forståelse"]);
        }
      } else if (exercise.substring(0, 4) === "rydd" && id) {
        formDataExercises.ryddeSetninger.push(id);
        if (!listOfExerciseTypes.includes(" Rydde setningen")) {
          setExerciseTypes(listOfExerciseTypes => [...listOfExerciseTypes, " Rydd setningen"]);
        }
      } else if (exercise.substring(0, 4) === "LåsO" && id) {
        formDataExercises.lasoppmobil.push(id);
        if (!listOfExerciseTypes.includes(" Skriv ordet")) {
          setExerciseTypes(listOfExerciseTypes => [...listOfExerciseTypes, " Skriv ordet"]);
        }
      } else if (exercise.substring(0, 4) === "DraI" && id) {
        formDataExercises.drainnmanglendeord.push(id);
        if (!listOfExerciseTypes.includes(" Fyll inn manglende ord")) {
          setExerciseTypes(listOfExerciseTypes => [...listOfExerciseTypes, " Fyll inn manglende ord"]);
        }
      }
    });
    setTotalExercises(
      formDataExercises.chat.length +
      formDataExercises.forstaelse.length +
      formDataExercises.ryddeSetninger.length +
      formDataExercises.lasoppmobil.length +
      formDataExercises.drainnmanglendeord.length
    );
  }

  /**
   * Fetches content from backend based on the given id, and pushes it
   * to createPlayList(), to make and play the set.
   * @param {int} id The id of the set.
   */
  function getContent(id) {
    axios
      .get(`/api/sets/${id}`, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((res) => {
        createPlayList(res.data);
        setTotalScore(0);
        setExerciseProgress(0);
        setStep('overview');
        setTitle(res.data.title);
      })
      .catch((e) => {
        return e;
      });
  }

  /**
   * The function will handle logic for going to the next exercise when the user
   * has finished the current exercise. It will use exercise lists created from
   * createPlayList() and check if the list contains more exercises. If it does,
   * then it goes to the next exercise. If not, then it goes to the finish. It deletes
   * the current exercise being played from the list.
   */
  function nextExercise() {
    if (formDataExercises.chat[0]) {
      setExerciseProgress(exerciseProgress + 1);
      setExerciseId(formDataExercises.chat.shift());
      setStep("chat");
    } else if (formDataExercises.forstaelse[0]) {
      setExerciseProgress(exerciseProgress + 1);
      setExerciseId(formDataExercises.forstaelse.shift());
      setStep("forstaelse");
    } else if (formDataExercises.ryddeSetninger[0]) {
      setExerciseProgress(exerciseProgress + 1);
      setExerciseId(formDataExercises.ryddeSetninger.shift());
      setStep("ryddeSetninger");
    } else if (formDataExercises.lasoppmobil[0]) {
      setExerciseProgress(exerciseProgress + 1);
      setExerciseId(formDataExercises.lasoppmobil.shift());
      setStep("lasoppmobil");
    } else if (formDataExercises.drainnmanglendeord[0]) {
      setExerciseProgress(exerciseProgress + 1);
      setExerciseId(formDataExercises.drainnmanglendeord.shift());
      setStep("drainnmanglendeord");
    } else {
      setStep("finish");
    }
  }

  /**
   * The function keeps track of scores and decides what feedback to show accordingly.
   * @param {int} score Score from the current task.
   * @param {int} totalPossibleScore The possible score from the current task.
   */
  function showFeedback(score, totalPossibleScore) {
    if (score === totalPossibleScore) {
      setTotalScore(totalScore + 1);
    }
    if (exerciseProgress === totalExercises) {
      setFeedbackState('finished');
    } else {
      setFeedbackState('playing');
    }
    setStep("feedback");
  }

  /**
   * The function takes in an mp3 and plays it.
   * @param {object} url - mp3 file.
   */
  function playAudio(url) {
    new Audio(url).play();
  }

  useEffect(() => {
    getContent(location.state.playId);
    setId(location.state.playId);
    // setTitle(location.state.title);
  }, []);

  // switch/case that returns the relevant component.
  switch (step) {
    case 'overview':
      return (
        <div>
          <OverviewPage
            setId={id}
            setTitle={title}
            totalExercises={totalExercises}
            listOfExerciseTypes={listOfExerciseTypes}
            nextExercise={nextExercise}
          />
        </div>
      );
    case "feedback":
      return (
        <div>
          <Feedback
            totalScore={totalScore}
            totalExercises={totalExercises}
            progress={exerciseProgress}
            possible={totalExercises}
            feedbackState={feedbackState}
            nextExercise={nextExercise}
          />
        </div>
      );
    case "forstaelse":
      return (
        <Forstaelse
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          playAudio={(url) => playAudio(url)}
        />
      );
    case "chat":
      return (
        <Chat
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          playAudio={(url) => playAudio(url)}
        />
      );
    case "ryddeSetninger":
      return (
        <RyddeSetninger
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          playAudio={(url) => playAudio(url)}
        />
      );
    case "lasoppmobil":
      return (
        <Unlock
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          playAudio={(url) => playAudio(url)}
        />
      );
    case "drainnmanglendeord":
      return (
        <FillInWord
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          playAudio={(url) => playAudio(url)}
        />
      );
    case "finish":
      return <Navigate to="/" />
    default:
      return null;
  }
};

export default PlaySets;
