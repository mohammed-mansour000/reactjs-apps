/* eslint-disable no-unreachable */
import React from 'react'
import './App.css';
import Students from './Students'
import AddStudent from './AddStudent'
import StudentDetails from './StudentDetails'
import { v4 as uuidv4 } from 'uuid';
export default class App extends React.Component { // Class Based Component

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({Students:[...this.state.Students,...data]})
      })
  }

  state = {
    Students:[
      {id:uuidv4(),name:'I. Zakaria'},
      {id:uuidv4(),name:'J. Kamel'},
      {id:uuidv4(),name:'T. Hmaidan'},
      {id:uuidv4(),name:'GDC. Attal'}
    ],
    selectedStudent :null
  }  
  StudentIsAdded = (s)=>{    
    this.setState({
      Students:[...this.state.Students,{id:uuidv4(),name:s.name}]
    })
  }  

  setSelectedStudent = (s)=>{
    this.setState({
      selectedStudent:s
    })
  }
  removeStudent = (s)=>{  
    let confirmation = window.confirm("Are you sure you want to remove " + s.name)  ;
    if (confirmation === true){
      this.setState({
            Students: this.state.Students.filter(x=>x.id !== s.id)
          },()=>{
            this.setSelectedStudent(null)      
          });         
    }    
  }
  render(){
    return(
      <>
        <div style={{backgroundColor:'red', padding:10}}  >
          <AddStudent StudentIsAdded={this.StudentIsAdded} />
          <Students   
              AllStudents={this.state.Students} 
              removeStudent={this.removeStudent}
              setSelectedStudent = {this.setSelectedStudent}
               />
          <StudentDetails selectedStudent={this.state.selectedStudent} />
        </div>
      </>
    )
  }
}




