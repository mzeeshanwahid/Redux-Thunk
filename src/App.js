import React, { useState, useEffect } from 'react';
import './App.css';
import { Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import todoAction from "./actions/todos";

function App() {
  //console.log("Props", props);
  const todos = useSelector(state => state.todo);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if(todos.length === 0){
      dispatch(todoAction.initToDo());
    }
  });


  const onSubmit = () => {
    dispatch(todoAction.addToDo(todo));
  }

  const handleDelete = (index) => {
    console.log("Delete ID", index);
    dispatch(todoAction.deleteToDo(index));
  }

  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className="d-block p-5 w-100 bg-info text-center text-white display-4">Todo's</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="py-5 text-center">
            <input type="text" className="form-control" onChange={e => setTodo(e.target.value)} placeholder="Enter todo" />
            <button className="btn btn-primary w-50 mt-3" onClick={onSubmit}>Submit</button>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          {todos.length > 0 ?
            todos.map((todo, index) =>
              <span key={index} className="d-block w-75 py-2 bg-secondary mt-2 mr-auto ml-auto text-white text-center">
                {todo}
                <img alt="del" src={require("./assets/delete.png")} title="Delete" className="float-right" onClick={() => handleDelete(index)} /></span>) :
            <span className="d-block text-center">No Todo</span>}
        </Col>
      </Row>
    </div>
  );
}

export default App;
