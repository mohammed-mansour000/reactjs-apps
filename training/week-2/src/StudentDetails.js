import React, { Component } from 'react'

export default class StudentDetails extends Component {
  // Stateless
  myStyle = {
        backgroundColor:'green',
        color:'white'
  }
  componentDidMount() // this will be called once per component life time
  {
      console.log('The Component has been mounted/created in memory')
  }
   // this will be called each time the state of this component is changed
   // and if the input property passed from the Parent component has changed
  componentDidUpdate() 
  {
      console.log('Something has changed in this component')
  }

  // this will be called any time the component is killed / remove from the DOM
  componentWillUnmount() 
  {
      console.log('Bkhaterkoun!!!!')
  }

  sketchEmptyStudent = ()=>{
      return (<div>You  have to select Student</div>)
  }
  sketchSelectedStudent = ()=>{
      return(<div>
                    <div><b>ID: </b>{this.props.selectedStudent.id}</div>
                    <div><b>Name: </b>{this.props.selectedStudent.name}</div>
                 </div>)
  }
  render(){
      if (this.props.selectedStudent == null){
          // return this.sketchEmptyStudent();
          return (<div style={this.myStyle}>You  have to select Student</div>);
      }
      else 
      {
          // return this.sketchSelectedStudent();
          return  (<div style={this.myStyle}>
                    <div><b>ID: </b>{this.props.selectedStudent.id}</div>
                    <div><b>Name: </b>{this.props.selectedStudent.name}</div>
                    <div><b>Email: </b>{this.props.selectedStudent.email}</div>
                 </div>)
      }
  }
}
