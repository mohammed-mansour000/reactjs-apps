import React from 'react'
import './App.css';
import C1 from './C1';
import Students from './Students';
import AddStudent from './AddStudent';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';

import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component{
  
  constructor(props) {
    super(props);
      this.state = {
        ListOfStudents: [
          { id: 1, name: "hamzi" },
          { id: 2, name: "yousef" },
          { id: 3, name: "ahmad" },
          { id: 4, name: "hussien" }
        ]
      }
  }

  //you should never change directly the state properties(MAINLY THE NON-PRIMITIVE[array, object] TYPES, WE USE ...)
   addStudent = (student) => {
    console.log(student)
    const arr = [...this.state.ListOfStudents]; //this will create a copy(not a reference) of ListOfStudents
    arr.push(student);
    this.setState({
      ListOfStudents: arr
    })
  }

  removeStudent = (id) => {
    let students = this.state.ListOfStudents.filter(e => {
      return e.id !== id
    });
    this.setState({
      ListOfStudents: students
    })
  }

  render(){
    return (
      <>
      <div className="App">
      <BrowserRouter>
        <Navbar xx="ass"></Navbar>
        <header className="App-header">
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
          <AddStudent 
                    addStudentHandler={this.addStudent}
                    >
          </AddStudent>
          <Students>
          </Students>
          {/* <Students 
                  ListOfStudents={this.state.ListOfStudents}
                  removeStudentHandler={this.removeStudent}
                  >
          </Students> */}
        </header>
      </BrowserRouter>
      </div>
     
      </>
    );
  }
}

export default App;
