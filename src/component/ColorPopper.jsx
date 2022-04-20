import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CircleIcon from "@mui/icons-material/Circle";
import {updateNote} from '../services/dataService'
import {IconButton} from '@mui/material'

export default function SimplePopper({note,listenToColorPopper,action,listenToNoteCard}) {
    const colors=['#f28b82','#fbbc04','#fff475','#ccff90','#a7ffeb','#cbf0f8','#aecbfa','#d7aefb','#fdcfe8','#e6c9a8','#e8eaed']
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        // console.log(event.currentTarget)
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
   const pickColor=(color)=>{
      
        if (action=='create'){
        listenToColorPopper(color)}
        else if (action=='update'){
            let obj = {
                note_id: note.id,
                title: note.title,
                description: note.description,
                is_deleted: note.is_deleted,
                archive: note.action,
                color: color
              }
              updateNote(obj).then((res)=>{console.log(res);listenToNoteCard()}).catch((e)=>{console.log(e)})
          
        }
        setAnchorEl(false)
   }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
  
    return (
        <div>
            {/* <button aria-describedby={id} type="button" onClick={handleClick}>
                Toggle Popper
            </button> */}
            <IconButton onClick={handleClick}><ColorLensIcon /></IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                    {colors.map((color)=>(
                        <CircleIcon key={color} onClick={()=>pickColor(color)} 
                          style={{
                            border: "1px solid black",
                            color: color,
                            borderRadius: "50%",
                            margin: "3px",
                          }}
                        />
                    ))}
                </Box>
            </Popper>
        </div>
    );
}
