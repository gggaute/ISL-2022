// import React, { useState, useEffect } from "react";
import { Typography, Button, Paper } from "@mui/material";
import NavBar from "../NavBar/Navbar";
import "./styles.css";

/**
 * A component with some information about the set clicked on StartPage, and a button to start playing
 * @author Ingvild, Synne
 * @param {object} property
 * @property {integer} setId    The ID of the set
 * @property {string} setTitle  The title of the set
 * @property {integer} totalExercises   Number of exercises in the set
 * @property {object} listOfExerciseTypes   List of different exercisetypes in the set
 * @property {function} nextExercise    Function to route to the first exercise in the set
 * @returns The overviewPage-component
 */
export default function OverviewPage({ setId, setTitle, totalExercises, listOfExerciseTypes, nextExercise }) {
    return (
        <>
            <NavBar></NavBar>
            <Paper id="rootPaper">
                <div id="overviewContent">
                    <Typography id="setHeader" variant="h1" component="div">
                        {setTitle}
                    </Typography>
                    <Typography id="noOfEx" variant="h2" component="div">
                        Antall oppgaver: {totalExercises}
                    </Typography>
                    <Typography id="typeEx" variant="h2" component="div">
                        Typer oppgaver: {listOfExerciseTypes.toString()}
                    </Typography>
                    <Button id="spillBtn" onClick={nextExercise}>SPILL</Button>
                </div>
            </Paper>
        </>
    )
}