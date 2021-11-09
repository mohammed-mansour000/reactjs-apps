import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class C1 extends Component {
    constructor(){
        super();
    }

    state = {
        name: "hamzi",
        age: 21
    }

    render() {
        return (
            <div>
                {this.state.name} is on Fire!! | 
                <button onClick={this.showName}>show</button> 
                <button onClick={this.changeName}>change</button> 
            </div>
        );
    }

    componentDidMount(){
        console.log("mount")    
    }

    componentDidUpdate(){
        console.log("updated")
    }

    componentWillUnmount(){
        console.log("unmount")    
    }

    showName = () => {
        alert("ana " + this.state.name)
    }

    changeName = () => {
        this.setState({
            name: this.state.name + "x"
        })
    }
}

C1.propTypes = {
    name: PropTypes.string
}