import { Box, IconButton } from '@mui/material'
import React from 'react'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import './noteboxone.css'
import { makeStyles } from '@material-ui/styles'
import InputBase from '@mui/material/InputBase';

const useStyles = makeStyles(
    {
        noteBoxOne: {
            // marginLeft:"100px",
            // paddingLeft:'40px',
            height: "10vh",
            width: "60% !important",
            // border: '1px solid red',

            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            // marginLeft:400

        },
        searchField: {
            paddingLeft: '10px',
            width: '100%',
            height: '60%',
            boxShadow: '0 4px 5px 2px rgba(0, 0, 0, .3)',
            // border: '1px solid red',
            borderRadius: "5px",

        },
        searchFieldButton: {
            height: "60%",
            width: "20%",
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'left',
            gap: 10,
            // border:'1px solid green',
            position: 'relative',
            right: 150
        },
        '@media(max-width: 320px)': {
            border:'10px solid red',
            
        }
    }
)
function NoteBoxOne(props) {
    const classes = useStyles()
    const clickNote1 = () => {
        console.log("onclick note1")
        props.listenToNoteBox1()
    }
    return (
        <Box className={classes.noteBoxOne} onClick={clickNote1} >
            {/* <TextField id="outlined-basic" label="take a note.." size="small" color='primary' className={classes.searchField} /> */}
            <InputBase className={classes.searchField} size='large' placeholder="take a note.."
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Box className={classes.searchFieldButton}>
                <Box><IconButton><CheckBoxOutlinedIcon /></IconButton></Box>
                <Box><IconButton><BrushIcon /></IconButton></Box>
                <Box><IconButton> <InsertPhotoIcon /> </IconButton></Box>
            </Box>
        </Box>
    )
}

export default NoteBoxOne