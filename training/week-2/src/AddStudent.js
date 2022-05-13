import React, { Component } from 'react'

export default class AddStudent extends Component {
  state = {
      name:''
  }
  CreateNewStudent = ()=>{      
      this.props.StudentIsAdded(this.state);
  }
  handleOnChange = (e)=>{      
      this.setState({
          name:e.target.value
      })      
  }
  render() {
    return (
      <div>
        <input type='text' 
               value={this.state.name}
               onChange={(e)=>{this.handleOnChange(e)}}
               placeholder='Enter Student Name' />
        <button onClick={()=>{this.CreateNewStudent()}}>Add</button>
      </div>
    )
  }
}
