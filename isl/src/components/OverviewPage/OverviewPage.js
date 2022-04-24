// import React, { useState, useEffect } from "react";
import { Card, Typography, Button, Paper } from "@mui/material";
import NavBar from "../NavBar/Navbar";
import "./styles.css";


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