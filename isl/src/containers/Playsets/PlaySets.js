import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Forstaelse from "../../components/Forstaelse/Forstaelse";
import Chat from "../../components/Chat/Chat";
import RyddeSetninger from "../../components/RyddeSetninger/RyddeSetninger";
import Feedback from "../../components/feedback/Feedback";
import axios from "axios";
import ContentContainer from "../../components/Fill-In-Word/ContentContainer";
import UnlockPad from "../../components/UnlockPad/UnlockPad";
/**
 * This is the container for playing exercise sets.
 * @author Maja, Julie, Simen
 * @returns A set of exercises.
 */
const PlaySets = () => {
  const location = useLocation();

  // Stepper for switching between exercises in the set.
  const [step, setStep] = useState("menu");

  // Id for the exercise being played.
  const [exerciseId, setExerciseId] = useState(0);
  // Id for the exercise set containing the exercises.
  const [id, setId] = useState(null);
  // Trackers for progress bar and feedback pages
  const [totalScore, setTotalScore] = useState(0);
  const [totalExercises, setTotalExercises] = useState(0);
  const [feedbackState, setFeedbackState] = useState(false);
  const [exerciseProgress, setExerciseProgress] = useState(0);

  // Lists of id's for the exercises in the set.
  const [formDataExercises] = useState({
    chat: [],
    forstaelse: [],
    ryddeSetninger: [],
    lasoppmobil: [],
    drainnmanglendeord: [],
  });

  /*   // Hooks to get access to the Redux store and obtain user and auth info.
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
 */
  /**
   * The function will turn the response object from the API endpoint into a
   * playlist with exercise IDs. The playlist will be stored as an object with
   * three lists, one for each exercise type. Only exercise types with an ID will be
   * added, and other data will be ignored.
   * @param {object} sets An object containing sets from backend.
   */
  function createPlayList(sets) {
    console.log(sets);
    formDataExercises.chat.length = 0;
    formDataExercises.forstaelse.length = 0;
    formDataExercises.ryddeSetninger.length = 0;
    formDataExercises.lasoppmobil.length = 0;
    formDataExercises.drainnmanglendeord.length = 0;
    Object.entries(sets).forEach(([exercise, id]) => {
      if (exercise.substring(0, 4) === "chat" && id) {
        formDataExercises.chat.push(id);
      } else if (exercise.substring(0, 4) === "fors" && id) {
        formDataExercises.forstaelse.push(id);
      } else if (exercise.substring(0, 4) === "rydd" && id) {
        formDataExercises.ryddeSetninger.push(id);
      } else if (exercise.substring(0, 4) === "LåsO" && id) {
        formDataExercises.lasoppmobil.push(id);
      } else if (exercise.substring(0, 4) === "DraI" && id) {
        formDataExercises.drainnmanglendeord.push(id);
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

  function getContent(id) {
    axios
      .get(`http://localhost:8000/api/sets/${id}`, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((res) => {
        createPlayList(res.data);
        setTotalScore(0);
        setExerciseProgress(0);
        nextExercise()
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
    console.log(step);
    setStep("");
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
    console.log(step);
  }

  // Keeps track of scores and decides what feedback to show accordingly.
  function showFeedback(score, totalPossibleScore) {
    if (score === totalPossibleScore) {
      setTotalScore(totalScore + 1);  
    }
    if (exerciseProgress === totalExercises){
      setFeedbackState('finished');
    } else {
      setFeedbackState('playing');
    }
    setStep("feedback");
  }

  /**
   * Retrieves the information related to the exercise set being played from backend
   * and changes step to "overview" when the restart button is clicked. This enables the user to
   * exit the exercise set currently being played. The user is redirected to the set's overviewpage.
   */

  function playAudio(url) {
    new Audio(url).play();
  }

  /**
   * Only runs if an id is passed as state/props while redirected to this page.
   * I.e search bar on front page.
   */
  useEffect(() => {
    getContent(location.state.playId);
    setId(location.state.playId);
  }, []);

  switch (step) {
    case "forstaelse":
      return (
        <Forstaelse
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          playAudio={(url) => playAudio(url)}
          nextExercise={nextExercise}
        />
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
    case "chat":
      return (
        <Chat
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          playAudio={(url) => playAudio(url)}
          nextExercise={nextExercise}
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
          nextExercise={nextExercise}
        />
      );
    case "lasoppmobil":
      return (
        <UnlockPad
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          playAudio={(url) => playAudio(url)}
          nextExercise={nextExercise}
        />
      );
    case "drainnmanglendeord":
      return (
        <ContentContainer
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          playAudio={(url) => playAudio(url)}
          nextExercise={nextExercise}
        />
      );
    case "finish":
      return <Navigate to="/" />
    default:
      return null;
  }
};

export default PlaySets;
