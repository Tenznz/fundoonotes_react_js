import React from 'react'
// import './NoteBoxThree.css'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/styles';
import NoteCards from './NoteCard';

const useStyles = makeStyles({

  noteBox3: {
    // border:"1px solid red",
    marginTop: "50px !important",
    // marginLeft: "300px !important",
    // paddingRight:"400px"
    width: "60%!important"
  }
})

function NoteBoxThree({listenToNoteCard}) {
  const classes = useStyles();
  const notes = JSON.parse(localStorage.getItem('data'))
  const noteList = notes.map((note) => (<Grid item xs key={note.id}>
    <NoteCards  note={note} listenToNoteCard={listenToNoteCard} />
    {/* {console.log(note.id)} */}
  </Grid>))

  return (
    <Grid container spacing={3} className={classes.noteBox3}>
      {noteList}
    </Grid>
  )
}

export default NoteBoxThree