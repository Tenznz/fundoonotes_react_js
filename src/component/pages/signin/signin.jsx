import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../signup/Asset/logo.png'
import './signin.css'
import { logInServer } from '../../../services/userservice';
import { useHistory } from 'react-router-dom';

const emailRegex = /^[A-Z,a-z,0-9,.'-]+$/;
// /[a-zA-Z0-9]*/;
const passwordRegex = /^[A-Z,a-z,0-9,.@'-]+$/;;

function Signin() {
    let history=useHistory()
    const [loginObj, setLoginObj] = React.useState({ username: "", password: "" })
    const [regexObj, setRegexObj] = React.useState({ usernameBorder: false, usernameHelper: "", passwordBorder: false, passwordHelper: "" })
    React.useEffect(() => { console.log("got it") }, [regexObj.usernameBorder])

    const takeEmail = (event) => {
        setLoginObj(prevState => ({ ...prevState, username: event.target.value }))
    }

    const takePassword = (event) => {
        setLoginObj(prevState => ({ ...prevState, password: event.target.value }))
    }
    const submit = async () => {
        console.log(loginObj)
        if (loginObj.username === "" && loginObj.password === "") {
            console.log("reach")
            await setRegexObj(prevState => ({ ...prevState, usernameBorder: true, usernameHelper: 'enter email', passwordBorder: true, passwordHelper: 'enter password' }))
            console.log(regexObj)
        }
        else {
            let usernameTest = emailRegex.test(loginObj.username)
            let passwordTest = passwordRegex.test(loginObj.password)

            console.log(regexObj.usernameBorder, regexObj.passwordBorder)

            if (usernameTest === true) {
                setRegexObj(prevState => ({ ...prevState, usernameBorder: false, usernameHelper: "" }))
            } else {
                setRegexObj(prevState => ({ ...prevState, usernameBorder: true, usernameHelper: "Enter your Email" }))
            }

            if (passwordTest === true) {
                setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
            } else {
                setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter your password" }))
            }
            if (usernameTest == true && passwordTest == true) {
                logInServer(loginObj).then((res) => { localStorage.setItem('token', res.data.token);history.push("/dashboard")}).catch((e) => { console.log(e) })

            }
        }
    }



    return (
        <div className='parent1'>
            <div className='signinChild1'>
                <div> <img src={logo} className="logo"></img> </div>
                <div className='signin-text'>Sign in</div>
                <div>Use your Google Account</div>
            </div>
            <div className='signinChild2'>
                <div>
                    <TextField id="outlined-basic" label="Email or phone" variant="outlined" size="small" color='primary' error={regexObj.usernameBorder} onChange={takeEmail} helperText={regexObj.usernameHelper} className="email-length" />
                </div>
                <div><Button variant="text" size='small'>Forgot email?</Button></div><br />

                <div>
                    <TextField id="outlined-basic" label="Password" variant="outlined" size="small" color='primary' onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} className="email-length" />
                </div>
                <div><Button variant="text" size='small' >Forgot password?</Button></div>
            </div>

            <div className='signinChild3'>
                <div className='label-text'>Not your computer? Use Guest mode to sign in privately.</div>
                <div><Button variant="text">Learn more</Button></div>
            </div>
            <div className='signinChild4'>
                <div><Button variant="text" onClick={()=>history.push("/")}>Create account</Button></div>
                <div><Button variant="contained" size="small" color="primary" onClick={submit}>Next</Button>
                </div>
            </div>
        </div>
    )

}
export default Signin