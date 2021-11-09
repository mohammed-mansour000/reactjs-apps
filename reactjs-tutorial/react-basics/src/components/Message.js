import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state  = {
            message: "Welcome"
        }
    }
    changeMessage = () => {
        this.setState({
            message: "message changed"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}> Change Message</button>
            </div>
        )
    }
}
