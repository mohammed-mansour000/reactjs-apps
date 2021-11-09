import React, { Component } from 'react'
import { uid } from 'uid';

export default class AddStudent extends Component {
    state = {
        id: 0,
        name: ""
    }
    handleInput = (e) => {
        console.log(e.target.value)
        this.setState({
            name : e.target.value
        })
    }

    handleSubmission = (e) => {
        e.preventDefault();
        this.props.addStudentHandler({id: uid(), name: this.state.name});
        //clear the input
        this.setState({
            name : ""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmission}>
                    <div className="form-group">
                        <label>Student Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleInput} placeholder="Enter name" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
        )
    }
}
