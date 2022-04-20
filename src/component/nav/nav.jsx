import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const drawerWidth = 240;
const marginTop = 70;

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: marginTop,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: marginTop,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer variant="permanent" open={props.openMenu}>


                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <LightbulbOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notes" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <NotificationsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reminder" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <CreateOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Edit labels" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ArchiveIcon />
                        </ListItemIcon>
                        <ListItemText primary="Archive" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DeleteOutlineIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Trash" />
                    </ListItem>
                </List>

            </Drawer>
        </Box>
    );
}
