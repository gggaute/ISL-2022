import React, { useState, useEffect } from "react";
import { Card, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function OverviewPage({ setId, totalExercises, listOfExerciseTypes, nextExercise }) {
    
    return (
        <Link to='/sets' state={{ playId: setId }}>
            <Card>
                <Typography variant="h2" component="div">
                    Oppgavesett {setId}
                </Typography>
                <Typography variant="h5" component="div">
                    Antall oppgaver: {totalExercises}
                </Typography>
                <Typography variant="h5" component="div">
                    Typen oppgaver: {listOfExerciseTypes}
                </Typography>
                <Button onClick={nextExercise}>SPILL</Button>
            </Card>
        </ Link>

    )


}