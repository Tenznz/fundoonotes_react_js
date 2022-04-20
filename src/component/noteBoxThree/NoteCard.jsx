import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Typography from '@mui/material/Typography';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputBase, TextareaAutosize, Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import SimplePopper from '../ColorPopper';
import CardActions from '@mui/material/CardActions';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import DeleteIcon from '@mui/icons-material/Delete'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from '@mui/material/IconButton';
import CardActionArea from '@mui/material/CardActionArea';
import { updateNote, deleteNote } from '../../services/dataService'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import Menu from '@mui/material/Menu';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import MoreMenu from './MoreMenu';

const useStyles = makeStyles({

  noteBox: {
    textAlign: 'left',
    // border:'1px solid red',
    position: 'relative',
    boxShadow: '0 4px 5px 2px rgba(0, 0, 0, .3)',
    // margin:'15px !important',
    minWidth: "30% !important ",
    maxWidth: "100% !important "

  },
  buttonOption: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // flexShrink:2
  },
  modalBox: {
    borderRadius: 10,
    width: '40vw ! important',
    textAlign: 'left',
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'

  },
  searchField: {
    // border: '1px solid red',
    // minWidth: "20%",
    maxWidth: "100%",
  },
  descriptionTextArea: {
    border: '1px solid transparent',
    // outlineColor:'transparent',
    // minWidth: "20%",
    maxWidth: "100%",
    // marginTop: 5
  },
  noteCardButtons: {
    // border: '1px solid red ! important',
    width: '38vw',
    position: 'relative',
    right: '20px !important',
    top: '40px !important',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonX: {
    marginLeft: 'auto'
  },
  pinIcon: {
    width: 40,
    // border: '1px solid red !important',
    position: 'relative',
    left: 300
  },
})
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function NoteCards({ note, listenToColorPopper,listenToNoteCard }) {
  const [updatenoteObj, setUpdatenoteObj] = React.useState({ title: note.title, description: note.description, color: note.color, archive: note.archive })
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const setArchive = () => {
    note.title = updatenoteObj.title
    note.description = updatenoteObj.description
    let obj = {
      note_id: note.id,
      title: updatenoteObj.title,
      description: updatenoteObj.description,
      is_deleted: note.is_deleted,
      archive: true,
      color: note.color
    }
    updateNote(obj).then((res) => { console.log(res) }).catch((e) => { console.log(e) })
  }

  const takeTitle = (event) => {
    console.log(event.target.value)
    setUpdatenoteObj(prevState => ({ ...prevState, title: event.target.value }))
  }
  const takeDescription = (event) => {
    setUpdatenoteObj(prevState => ({ ...prevState, description: event.target.value }))
  }
  const removeNote = () => {
    let obj = {
      note_id: note.id
    }
    console.log(obj)
   deleteNote(obj).then((res) => { console.log(res) }).catch((e) => { console.log(e) })
  }

  return (
    <Card sx={{ maxWidth: 300, backgroundColor: note.color }} className={classes.noteBox}>
      <CardActionArea onClick={handleOpen}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {note.title}
          </Typography>
          <Typography variant="body4">
            {note.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonOption}>
        <IconButton size="small"><AddAlertIcon fontSize="small" /></IconButton>
        <IconButton size="small"><PersonAddAltIcon fontSize="small" /></IconButton>
        <SimplePopper action='update' note={note} listenToNoteCard={listenToNoteCard}/>
        <IconButton size="small"><InsertPhotoIcon fontSize="small" /></IconButton>
        <IconButton size="small" onClick={setArchive}><ArchiveIcon fontSize="small" /></IconButton>
        <IconButton size="small" onClick={removeNote}><DeleteIcon  fontSize='small'/></IconButton>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes.modalBox} style={{ backgroundColor: note.color }}>

          <Typography id="modal-modal-title" variant="h6" component="h2">

            <InputBase className={classes.searchField} size='small' placeholder="Title" defaultValue={note.title} onChange={takeTitle}
              inputProps={{ 'aria-label': 'search google maps' }} />
            <IconButton size="small" className={classes.pinIcon}><PushPinOutlinedIcon /></IconButton>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="take a note ..."
              // size='large'
              style={{ backgroundColor: note.color }}
              className={classes.descriptionTextArea}
              defaultValue={note.description}
              onChange={takeDescription}

            />
            {/* {note.description} */}
          </Typography>
          <Box className={classes.noteCardButtons}>
            <CardActions disableSpacing>
              <IconButton ><AddAlertIcon fontSize="small" /></IconButton>
              <IconButton ><PersonAddAltIcon fontSize="small" /></IconButton>
              <SimplePopper listenToColorPopper={listenToColorPopper} action="create" note={note} />
              <IconButton ><InsertPhotoIcon fontSize="small" /></IconButton>
              <IconButton ><ArchiveIcon fontSize="small" /></IconButton>
              <IconButton ><MoreVertIcon fontSize='small' /></IconButton>
              {/* <MoreMenu/> */}
              <IconButton><UndoIcon fontSize='small' /></IconButton>
              <IconButton><RedoIcon fontSize='small' /></IconButton>

            </CardActions>
            <CardActions onClick={handleClose}><Button className={classes.buttonX} onClick={setArchive}>Close</Button>
            </CardActions>
          </Box>

        </Box>
      </Modal>
    </Card>
  );
}
export default NoteCards