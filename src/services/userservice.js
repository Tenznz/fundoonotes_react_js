import axios from "axios";

export const logInServer = (obj) => {
    let response = axios.post('http://127.0.0.1:8000/user/login', obj)
    return response
}