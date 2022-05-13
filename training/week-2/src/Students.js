import React, { Component } from 'react'

export default class Students extends Component {
  // Stateless
  SketchStudents = ()=>{
    
    return(
      <>
        {
          this.props.AllStudents.map((s)=>{
            return(              
                <tr key={s.id} onClick={()=>{this.props.setSelectedStudent(s)}}>  
                    <td><span style={{paddingRight:10}}>{s.name}</span></td>
                    <td><button
                        style={{backgroundColor:'red'}}
                        onClick={()=>{this.props.removeStudent(s)}}
                        >X</button>
                      </td>
                </tr>           
            )
          })
        }
      </>
    )
  }
  
  render() {  
    console.log('render')      
    return (      
      <div style={{backgroundColor:'yellow'}}>
        <table>
          <tbody>
            {this.SketchStudents()}
          </tbody>
        </table>
      </div>
    )
  }
}
