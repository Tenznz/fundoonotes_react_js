import React from 'react'
import keepIconImg from "../../asset/img/keep-icon.png"
import "./header.css"
import Box from "@mui/material/Box";
import { makeStyles } from '@material-ui/styles'
import DehazeIcon from '@mui/icons-material/Dehaze';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewComfyIcon from '@mui/icons-material/ViewComfy'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // border:"1px solid red",
    // width:"100vw !important",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    "@media(max-width: 800px)": {
        // marginTop: theme.spacing(5),
        // backgroundColor: "red"
       display:"none"
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // color: 'inherit',
    width:"100%",
    marginTop:'2px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const useStyles = makeStyles({
    headerBox: {
        // border:"1px solid red",
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: '8vh',
        Width: '100vw!important',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        position: 'sticky',
        top: '0',
        backgroundColor: 'white'
    },
    hBox1: {
        // marginLeft: 50,
        height: '80%',
        width: '15%',
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: "flex-end",
        alignItems: "center",
        // border: '1px solid red',
    },
    hBox2: {
        width: "60%",
        height: "80%",
        textAlign:'left',
        // backgroundColor:'grey',
        // border: '1px solid red',
        // outlineColor:'black',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10
    },
    hBox3: {
        width: "10%",
        height: '80%',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center'
    },
    hBox4: {
        height: "80%",
        width: '10%',
        // border: '1px solid red',
        padding: '0 30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center"
    },
    header_search_textfield: {
        width: "90% !important",
        // border: '1px solid red',
        height: '6vh',
        borderRadius: '10px',
        fontSize: "6px",
    },

    keep_font: {
        fontSize: "20px",
        color: 'grey',
    },
    keep_icon: {
        size: 'small'
    },
    hBox1_child: {
        width: '100%',
        height: '100%',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    search_icon: {
        // border: '1px solid red !important',
        position: "relative",
        right: '690px',
        "@media(max-width: 800px)": {
            // marginTop: theme.spacing(5),
            // backgroundColor: "red"
            left: "300px"
        }
    }

})

function Header(props) {
    const classes = useStyles()
    const openMenu = () => {
        console.log("reach Header")
        props.drawer()
    }

    return (
        <Box className={classes.headerBox}>
            {/* <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton> */}
            <Box className={classes.hBox1}>
                <Box><IconButton onClick={openMenu}><DehazeIcon /></IconButton> </Box>
                <Box className={classes.hBox1_child}>
                    <img className={classes.keep_icon} src={keepIconImg} alt="light bulb" />
                    <p className={classes.keep_font}>Keep</p>
                </Box>
            </Box>

            <Box className={classes.hBox2}>
                {/* <Box>
                    <InputBase className={classes.header_search_textfield} size='large' placeholder="Search"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </Box>
                <Box><IconButton className={classes.search_icon}><SearchIcon fontSize="large" /></IconButton></Box> */}
                <Search className={classes.header_search_textfield}>
                    <SearchIconWrapper >
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Box>
            <Box className={classes.hBox3}>
                <Box><IconButton ><RefreshIcon /></IconButton ></Box>
                <Box><IconButton ><ViewStreamIcon fontSize='medium' /></IconButton ></Box>
                <Box><IconButton ><SettingsIcon /></IconButton ></Box>
            </Box>
            <Box className={classes.hBox4}>
                <Box><IconButton ><ViewComfyIcon /></IconButton ></Box>
                <Box><IconButton ><img src="/img/note6.png" /></IconButton ></Box>
            </Box>
        </Box>
    )
}

export default Header