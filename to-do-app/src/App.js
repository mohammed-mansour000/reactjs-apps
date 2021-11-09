import './App.css';
import React, { useState } from 'react';

function App (){
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      todoList: []
  //   }
  // }
  const [todoList, setTodoList] = useState([]);

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    console.log(e.target.elements.todoTask.value)
    const todoDesc = e.target.elements.todoTask.value;
    if(todoDesc.length > 0){
      //const newTodoList = [...this.state.todoList, todoDesc]
      // this.setState({
      //   //todoList: newTodoList
      //   todoList: [...this.state.todoList, todoDesc]
      // })
      setTodoList([...todoList, todoDesc]);
      console.log(todoList);
      e.target.reset();
    }
  }

  const handleDeleteTodo = (index) => {
    var deleteArray = [...todoList];
    deleteArray.splice(index, 1);
    // this.setState({
    //   todoList: deleteArray
    // })
    setTodoList(deleteArray);
  }
  // render(){
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1>Todos App</h1>
          </div>
        </div>
        <form className="mb-3" onSubmit={handleSubmitEvent}>
          <div className="input-group">
            <input type="text" placeholder="Please enter your task" name="todoTask" className="form-control" />
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="submit">Add</button>
            </div>
          </div>
        </form>
        <ul className="list-group">
          {
            todoList.map(
              (item, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    {item}
                    <button className="btn btn-sm btn-outline-danger float-right" onClick={() => {handleDeleteTodo(index)}}>
                      Delete
                    </button>
                  </li>
                )
              }
            )
          }
        </ul>
      </div>
    );
  // }
}

export default App;
