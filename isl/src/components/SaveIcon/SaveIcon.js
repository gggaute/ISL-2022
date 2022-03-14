import React, { useState, useEffect } from 'react';
/* import axios from 'axios'; */
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

/**
 * An icon component for saving/unsaving exercise sets.
 * @author Simen
 * @param {object} props
 * @property {integer} id The id of the set.
 * @returns Clickable icon component.
 */

function SaveIcon({ id }) {
  const [saved, setSaved] = useState(false);

 /*  function getSaved() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/usersaved/${id}`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('access')}`,
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then((res) => {
        setSaved(res.data.saved);
      })
      .catch(() => {});
  }

  useEffect(() => {
    getSaved();
  }, []);

  // Backend requests for saving/unsaving exercise set.
  function onClickSave() {
    if (!saved) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/saved/`,
          { sets: id },
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem('access')}`,
              'Content-Type': 'application/json',
              accept: 'application/json',
            },
          }
        )
        .then(() => {
          getSaved();
        })
        .catch((e) => {
          return e;
        });
    } else if (saved) {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/api/saved/${id}`, {
          headers: {
            Authorization: `JWT ${localStorage.getItem('access')}`,
            accept: 'application/json',
          },
        })
        .then(() => {
          getSaved();
        })
        .catch((e) => {
          return e;
        });
    }
  } */

  return (
    <Button
      data-testid="favoriteButton"
      variant="outlined"
      color="secondary"
      style={{ margin: '8px' }}
      startIcon={
        saved ? (
          <FavoriteIcon data-testid="favorite" style={{ color: 'red' }} />
        ) : (
          <FavoriteBorderIcon data-testid="notFavorite" />
        )
      }
      //onClick={() => onClickSave()}
    >
      Lagre
    </Button>
  );
}

export default SaveIcon;
