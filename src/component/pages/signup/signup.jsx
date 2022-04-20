import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import account from './Asset/account.svg';
import google from './Asset/logo.png';
import './signup.css'
import { useHistory } from 'react-router-dom';

const firstNameRegex = /^[A-Z,a-z,0-9]+$/
const lastNameRegex = /^[A-Z,a-z,0-9]+$/
const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
// const confirmPasswordRegex= ""

function Signup() {
    let history=useHistory()
    const [registerObj, setRegisterObj] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [regexObj, setRegexObj] = React.useState({
        firstNameBorder: false, firstNameHelper: "",
        lastNameBorder: false, lastNameHelper: "",
        emailBorder: false, emailHelper: "",
        passwordBorder: false, passwordHelper: "",
        confirmPasswordBorder: false, confirmPasswordHelper: ""
    })

    const takeFirstName = (event) => {
        setRegisterObj(prevState => ({ ...prevState, firstName: event.target.value }))
    }
    const takeLastName = (event) => {
        setRegisterObj(prevState => ({ ...prevState, lastName: event.target.value }))
    }
    const takeEmail = (event) => {
        setRegisterObj(prevState => ({ ...prevState, email: event.target.value }))
    }
    const takePassword = (event) => {
        setRegisterObj(prevState => ({ ...prevState, password: event.target.value }))
    }
    const takeConfirmPassword = (event) => {
        setRegisterObj(prevState => ({ ...prevState, confirmPassword: event.target.value }))
    }
    const submit = () => {

        console.log(registerObj)
        if (registerObj.firstName === "" && registerObj.lastName === "" && registerObj.email === "" && registerObj.password === "" && registerObj.confirmPassword === "") {
            console.log("reach")
            setRegexObj(prevState => ({
                ...prevState,
                firstNameBorder: true, firstNameHelper: 'enter first name',
                lastNameBorder: true, lastNameHelper: 'enter last name',
                emailBorder: true, emailHelper: "Enter email",
                passwordBorder: true, passwordHelper: "Enter password",
                confirmPasswordBorder: true, confirmPasswordHelper: "Enter confirm password"
            }))
            console.log(regexObj)
        } else {
            let firstNameTest = firstNameRegex.test(registerObj.firstName)
            let lastNameTest = lastNameRegex.test(registerObj.lastName)
            let emailTest = emailRegex.test(registerObj.email)
            let passwordTest = passwordRegex.test(registerObj.password)
            if (firstNameTest === true) {
                setRegexObj(prevState => ({ ...prevState, firstNameBorder: false, firstNameHelper: "" }))
            } else {
                setRegexObj(prevState => ({ ...prevState, firstNameBorder: true, firstNameHelper: "invalid input" }))
            }
            if (lastNameTest === true) {
                setRegexObj(prevState => ({ ...prevState, lastNameBorder: false, lastNameHelper: "" }))
            } else {
                setRegexObj(prevState => ({ ...prevState, lastNameBorder: true, lastNameHelper: "invalid input" }))
            }
            if (emailTest === true) {
                setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: "" }))
            } else {
                setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: "invalid input" }))
            }
            if (passwordTest === true) {
                setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
            } else {
                setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: "invalid input" }))
            }
            if (registerObj.confirmPassword === registerObj.password) {
                setRegexObj(prevState => ({ ...prevState, confirmPasswordBorder: false, confirmPasswordHelper: "" }))
            } else {
                setRegexObj(prevState => ({ ...prevState, confirmPasswordBorder: true, confirmPasswordHelper: "password doesnt match" }))
            }
        }
    }


    return (
        <div className='parent'>
            <div className='child1'>
                <div className='intro'>
                <div><img src={google} className="App-logo" alt="logo"></img></div>
                <div className='create-text'>Create your Google Account</div>
                </div>
                <div className='two-field'>
                    {/* error={regexObj.usernameBorder} onChange={takeEmail} helperText={regexObj.usernameHelper} */}
                    <TextField className="textfield" id="outlined-basic" label="First name" variant="outlined" size="small" color='primary' error={regexObj.firstNameBorder} onChange={takeFirstName} helperText={regexObj.firstNameHelper} />
                    <TextField className="textfield" id="outlined-basic" label="Last name" variant="outlined" size="small" color='primary' error={regexObj.lastNameBorder} onChange={takeLastName} helperText={regexObj.lastNameHelper} />
                </div>
                <div className='name-field'>
                    <div className='email'>
                        <TextField className='email-length' id="outlined-basic" label="Email" variant="outlined" size="small" color='primary' error={regexObj.emailBorder} onChange={takeEmail} helperText={regexObj.emailHelper} />
                    </div>
                    <div >
                        <Button variant="text" size="small" className='email-button'>Use my current email address instead</Button></div>
                </div>
                <div>
                    <div className='two-field'>
                        <TextField className="textfield" id="outlined-basic" label="Password" variant="outlined" size="small" color='primary' error={regexObj.passwordBorder} onChange={takePassword} helperText={regexObj.passwordHelper} />
                        <TextField className="textfield" id="outlined-basic" label="Confirm" variant="outlined" size="small" color='primary' error={regexObj.confirmPasswordBorder} onChange={takeConfirmPassword} helperText={regexObj.confirmPasswordHelper} />
                    </div>
                    <div className='checkbox'><Checkbox /> Show password</div>
                </div>
                <div className='two-button'>
                    {/* <Button variant="text">Text</Button> */}
                    <Button variant="text" size="small"onClick={()=>history.push("/SignIn")}>Sign in instead</Button>
                    <Button variant="contained" size="small" onClick={submit}>Next</Button>
                </div>

            </div>
            <div className='child2'>
                <div className="account-img"><img src={account}></img> </div>
                <div className='label-text'><p>One account. All of Google working for you.</p></div>
            </div>
        </div>
    )
}

export default Signup
