import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import Forstaelse from "../../components/Forstaelse/Forstaelse";
import Chat from "../../components/Chat/Chat";
import RyddeSetninger from "../../components/RyddeSetninger/RyddeSetninger";
import Feedback from "../../components/feedback/Feedback";
import axios from 'axios';
import FinishedSet from "../../components/finishedSet/FinishedSet";
import OverviewPage from "../../components/OverviewPage/OverviewPage";
import ContentContainer from '../../components/Fill-In-Word/ContentContainer'
import UnlockPad from '../../components/UnlockPad/UnlockPad'

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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Lists of id's for the exercises in the set.
  const [formDataExercises] = useState({
    chat: [],
    forstaelse: [],
    ryddeSetninger: [],
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
    Object.entries(sets).forEach(([exercise, id]) => {
      if (exercise.substring(0, 4) === "chat" && id) {
        formDataExercises.chat.push(id);
      } else if (exercise.substring(0, 4) === "fors" && id) {
        formDataExercises.forstaelse.push(id);
      } else if (exercise.substring(0, 4) === "rydd" && id) {
        formDataExercises.ryddeSetninger.push(id);
      } /* nye oppgavene else if (exercise.substring(0, 4) === "laso" && id) {
        formDataExercises..push(id);
      } else if (exercise.substring(0, 4) === "drai" && id) {
        formDataExercises.ryddeSetninger.push(id);
      }
      */
      });
    setTotalExercises(
      formDataExercises.chat.length +
        formDataExercises.forstaelse.length +
        formDataExercises.ryddeSetninger.length
    );
  }

  function getContent(id) {
    axios
      .get(`http://localhost:8000/api/sets/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then((res) => {
        createPlayList(res.data);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setTotalScore(0);
        setExerciseProgress(0);
        setStep('overview');
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
    }
     else {
     setStep("finish");
    }
  }

  // Keeps track of scores and decides what feedback to show accordingly.
  function showFeedback(score, totalPossibleScore) {
    if (score === totalPossibleScore) {
      setTotalScore(totalScore + 1);
      setFeedbackState(true);
    } else {
      setFeedbackState(false);
    }
    setStep("feedback");
  }

  /**
   * Retrieves the information related to the exercise set being played from backend
   * and changes step to "overview" when the restart button is clicked. This enables the user to
   * exit the exercise set currently being played. The user is redirected to the set's overviewpage.
   */
  function restartSet() {
    return (
      <Grid>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<ReplayIcon />}
          onClick={() => {
            getContent(id);
            setStep("overview");
          }}
        >
          Restart sett
        </Button>
      </Grid>
    );
  }

  function playAudio(url) {
    new Audio(url).play();
  }

  /**
   * Only runs if an id is passed as state/props while redirected to this page.
   * I.e search bar on front page.
   */
  useEffect(() => {
    console.log('newbranchmfs');
    getContent(location.state.playId);
    setId(location.state.playId);
  }, []);

  switch (step) {
    case "overview":
      return (
        <div>
          <OverviewPage
            title={title}
            description={description}
            id={id}
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
          restartSet={() => restartSet()}
          playAudio={(url) => playAudio(url)}
        />
      );
    case "feedback":
      return (
        <div>
          <Feedback
            totalScore={totalScore}
            totalExercises={totalExercises}
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
          restartSet={() => restartSet()}
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
          restartSet={() => restartSet()}
          playAudio={(url) => playAudio(url)}
        />
      );
      case "lasoppmobil":
      return (
        <UnlockPad
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          restartSet={() => restartSet()}
          playAudio={(url) => playAudio(url)}
        />
      );
      case "drainnmanglendeord":
      return (
        <ContentContainer
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          restartSet={() => restartSet()}
          playAudio={(url) => playAudio(url)}
        />
      );
    case "finish":
      return (
        <div>
          <FinishedSet
            totalScore={totalScore}
            totalExercises={totalExercises}
            percentage={totalScore / totalExercises}
            id={id}
            getContents={getContent}
            setSteps={setStep}
          />
        </div>
      );
    default:
      return null;
  }
};

export default PlaySets;