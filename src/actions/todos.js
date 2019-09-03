import axios from "axios";

const addToDo = (text) => {
    return {
        type: "ADD_TODO",
        payload: text
    }
}

const deleteToDo = (index) => {
    return {
        type: "DELETE_TODO",
        payload: index
    }
}

const initToDo = () => async dispatch => {
    let list = await axios.get("https://jsonplaceholder.typicode.com/todos?userId=1");
    if(list) dispatch( {
        type: "INIT_TODO",
        payload: list.data
    }) 
    else return {
        type: "None"
    }
  };

export default { addToDo, deleteToDo, initToDo };