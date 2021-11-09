import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component{
    state = {
        parentName: "Parent"
    }
    greetParent = (childName) => {
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
   
    render(){
        return (
            <div>
                <Child greetHandler={this.greetParent}></Child>
            </div>
        )
    }
}

export default Parent;