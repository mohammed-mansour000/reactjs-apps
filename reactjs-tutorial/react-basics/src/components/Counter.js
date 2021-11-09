import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment = () => {
        this.setState({
            count: this.state.count + 1
        },
        () =>{
            console.log(this.state.count) //for first click this will give 1 since it's callback function
        });
        console.log(this.state.count) //for first click this will give 0 since it's asynchronous
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => { this.increment() }}>Increment</button>
            </div>
        )
    }
}

export default Counter;