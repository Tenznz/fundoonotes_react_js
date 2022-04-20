import React from 'react'
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';

const noteMenu = ['Delete note', 'Add label', 'Add Drawing', 'Make a copy', 'Show checkboxes', 'Grab image text', 'Copy to Google Docs'];

function MoreMenu() {

    const [noteMenuObj, setnoteMenuObj] = React.useState(null);

    const handleOpenNoteMenu = (event) => {
        setnoteMenuObj(event.currentTarget);
    };
    const handleCloseNoteMenu = () => {
        console.log(noteMenuObj)
        setnoteMenuObj(null);
    };


    return (
        <div> <Tooltip title="Open noteMenu">

            <IconButton onClick={handleOpenNoteMenu} sx={{ p: 0 }}><MoreVertIcon fontSize='small' /></IconButton>
        </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={noteMenuObj}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(noteMenuObj)}
                onClose={handleCloseNoteMenu}
            >
                {noteMenu.map((option) => (
                    <MenuItem key={option} onClick={handleCloseNoteMenu}>
                        <Typography textAlign="center">{option}</Typography>
                    </MenuItem>
                ))}
            </Menu></div>
    )
}

export default MoreMenu