let todos = [];

const todoReducer = (state = todos, action) => {
    switch (action.type) {
        case "INIT_TODO":
            let data = action.payload.map(todo => todo.title);
            return data;
        case "ADD_TODO":
            let newObj = [
                action.payload,
                ...state
            ]
            return newObj;
        case "DELETE_TODO":
            let afterDel = state.filter((todo, index) => { return index !== action.payload });
            return afterDel;
        default:
            console.log("Default");
            return state;
    }
}

export default todoReducer;