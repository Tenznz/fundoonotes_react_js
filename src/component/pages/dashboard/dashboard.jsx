import React from 'react'
import "./dashboard.css"

import { Box } from '@mui/material'
import Header from '../../header/header'
import NoteBoxOne from '../../noteboxone/noteboxone'
import NoteBoxTwo from '../../noteboxtwo/noteboxtwo'
import { getNote } from '../../../services/dataService'
import NoteBoxThree from '../../noteBoxThree/NoteBoxThree'
import Nav from '../../nav/nav'
import { makeStyles } from '@material-ui/styles'
import MiniDrawer from '../../nav/nav'
import { createNote } from '../../../services/dataService'
import HeaderMUI from '../../header/HeaderMUI'

const useStyles = makeStyles(
    {
        boxParent: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        boxChild: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        },
       

    }
)

function Dashboard() {
    const classes = useStyles()
    const [noteObj,setNoteObj]=React.useState([])
    const [showNote,setShowNote]=React.useState(true) 
    const [openMenu,setOpenMenu]=React.useState(false)
    const getNoteAll = () => {
        // getNote().then((res)=>{setNoteObj(res.data.data)}).catch((e)=>{console.log(e)})
        getNote().then((res) => { localStorage.setItem("data", JSON.stringify(res.data.data));setNoteObj(res.data.data) }).catch((e) => { console.log(e) })
        console.log("DashBoard")
    }
    
    const listenToNoteBox1 =()=>{
        setShowNote(false)
    }
    const listenToNoteBox2 = () => {
        // getNoteAll()
        setShowNote(true)
    }
    const listenToNoteCard =() => {
        getNoteAll()
    }
    
    // React.useEffect(() => { getNoteAll(); console.log("getnoteall")}, [])
    React.useEffect(() => { getNoteAll(); console.log("getnoteall")}, [showNote])
    const drawer=()=>{
        setOpenMenu(!openMenu)
    }


    React.useEffect(() => { getNoteAll(); console.log("getnoteall")}, [showNote])

    return (
        <div>
            <Header  drawer={drawer}/>
            {/* <HeaderMUI drawer={drawer}/> */}
            <MiniDrawer openMenu={openMenu}/>
            <Box className={classes.boxParent}>
                <Box className={classes.boxChild}>
                    {showNote ? <NoteBoxOne listenToNoteBox1={listenToNoteBox1} /> : <NoteBoxTwo listenToNoteBox2={listenToNoteBox2} />}
                    <NoteBoxThree listenToNoteCard={listenToNoteCard}/>
                </Box>
            </Box>
            {/* <MiniDrawer/> */}
        </div>
    )
}

export default Dashboard