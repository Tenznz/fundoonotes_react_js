import { makeStyles } from '@material-ui/styles'
import { Box, IconButton, Button, InputBase, } from '@mui/material'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createNote } from '../../services/dataService'
import './noteboxtwo.css'
import SimplePopper from '../ColorPopper';
import CardActions from '@mui/material/CardActions';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

const useStyles = makeStyles(
    {
        noteBoxTwo: {
            height: "20vh",
            width: "40vw",
            boxShadow: '0 4px 5px 2px rgba(0, 0, 0, .3)',
            border: '1px transparent',
            borderRadius: 5,
            // border: "1px solid red",
            display: 'flex',
            flexDirection: 'column',
            justifyContent:"space-between",
            textAlign: 'left',
            position:'relative',
            top:10,
            right:60
        },
        searchField: {
            // border: '1px solid red',
            marginTop: 10,
            paddingLeft: 10,
            width: "98%",
            height: "20% !important",
        },
        boxChild1: {
            // border: '1px solid red',
            height: 55
        },
        descriptionTextArea: {
            // border: '1px solid red',
            width: "98%",
            paddingLeft: 10,
            marginBottom: 5,
            border: '1px solid transparent'
        },
        pinIcon: {
            width: 40,
            // border: '1px solid red',
            position: 'relative',
            bottom: 32,
            left: 560
        },
        buttonX: {
            // marginLeft: "180px !important",
            // border : "1px solid red !important",
            position:'relative',
            left:"180px"
        },
        
        
    }
)

function NoteBoxTwo(props) {
    const classes = useStyles()

    const [noteObj, setNoteObj] = React.useState({ title: "", description: "", color: '#fff', archive: false })
    const takeTitle = (event) => {
        setNoteObj(prevState => ({ ...prevState, title: event.target.value }))
    }
    const takeDescription = (event) => {
        setNoteObj(prevState => ({ ...prevState, description: event.target.value }))
    }
    const listenToColorPopper = (color) => {
        setNoteObj(prevState => ({ ...prevState, color: color }))
    }


    const onSubmit = () => {
        // createNote(noteObj).then((res)=>{console.log(res)}).catch((e)=>{console.log(e)})
        clickNoteBox2()
        createNote(noteObj).then((res) => { localStorage.setItem('note', [noteObj.title, noteObj.description]) }).catch((e) => { console.log(e) })
        // localStorage.getItem('note')
    }
    const clickNoteBox2 = () => {
        console.log("onclick note2")
        props.listenToNoteBox2()
    }
    const isArchive = () => {
        console.log(noteObj.archive)
        setNoteObj(prevState => ({ ...prevState, archive: true }))
    }
    return (
        <Box className={classes.noteBoxTwo} style={{ backgroundColor: noteObj.color }}>
            <Box className={classes.boxChild1}>
                <Box>
                    <InputBase className={classes.searchField} size='small' placeholder="Title"
                        inputProps={{ 'aria-label': 'search google maps' }} onChange={takeTitle}
                    /> </Box>
                <Box className={classes.pinIcon}><IconButton size="small"><PushPinOutlinedIcon /></IconButton></Box>
            </Box>
            <Box>
                <Box>
                    {/* <Textarea aria-label="empty textarea" placeholder="take a note ..."
                        className=''
                        onChange={takeDescription}
                    /> */}
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="take a note ..."
                        // size='large'
                        style={{ backgroundColor: noteObj.color }}
                        className={classes.descriptionTextArea}
                        onChange={takeDescription}

                    />
                    {/* <textarea className="textarea title-text" placeholder="take a note ..." onChange={takeDescription}></textarea> */}
                </Box>
            </Box>
            <Box className="">
                <CardActions>
                    <IconButton ><AddAlertIcon fontSize='small' /></IconButton>
                    <IconButton ><PersonAddAltIcon  fontSize='small'/></IconButton>
                    <SimplePopper listenToColorPopper={listenToColorPopper} action="create" />
                    <IconButton ><InsertPhotoIcon fontSize='small'/></IconButton>
                    <IconButton onClick={isArchive}><ArchiveIcon fontSize="small" /></IconButton>
                    <IconButton><MoreVertIcon  fontSize='small'/></IconButton>
                    <IconButton><UndoIcon fontSize='small' /></IconButton>
                    <IconButton><RedoIcon fontSize='small'/></IconButton>
                    <Button className={classes.buttonX} onClick={onSubmit}>Close</Button>
                </CardActions>
            </Box>
        </Box>

    )
}

export default NoteBoxTwo