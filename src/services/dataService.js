import axios from "axios";
let headerConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}

export const createNote = (obj) => {
    let response = axios.post('http://127.0.0.1:8000/notes/note', obj, headerConfig)
    return response
}
export const getNote = () => {
    let response = axios.get('http://127.0.0.1:8000/notes/note', headerConfig)
    return response
}
export const updateNote = (obj) => {
    let response = axios.put('http://127.0.0.1:8000/notes/note', obj, headerConfig)
    return response
}
export const deleteNote = async(obj) => {
    console.log("Delete start")
        // let response = await axios.delete(`http://127.0.0.1:8000/notes/note?nodeID=${obj.noteID}`, headerConfig)
    let response = await axios.delete(`http://127.0.0.1:8000/notes/note/${obj.note_id}`, headerConfig)

    console.log("Delete End")
    return response
}