import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'redux'

//stateless component because the parent is sending needed data and it's in charge of display part
class Students extends Component {
    state = {
        name: 's'
    }

    handleInputChange = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        console.log(this.state.name)
        e.preventDefault();
    }
    
    showName = (name) => {
        console.log(name)
        alert(name)
    }

    handleRemoveClick = (id) => {
        //this.props.removeStudentHandler(id);
        this.props.removeLovelyStudent(id);
    }

    render(props) {
        console.log(this.props)
        
        const students = this.props.students.map(e => {
            return (
                    <li key={e.id} className="list-group-item text-dark">
                        <span onClick={() => {this.showName(e.name)}}>{e.id}: {e.name}</span>
                        <button className="btn btn-danger float-right" onClick={() => {this.handleRemoveClick(e.id)}}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </li>
                    )
        });

        console.log(students)
        return (
            <div>
                <h1>List of Students</h1>
                <ul className="list-group">
                    {students}
                </ul>
            </div>
        )
    }
}


const mapStateProps = (state)=>{
    return {
        students: state.students
    }
}

const mapDispatchProps = (dispatch)=>{
    return {
        removeLovelyStudent: (selectedId) => {dispatch({type: 'REMOVE_REDUCER', id: selectedId})}
    }
}

export default connect(mapStateProps, mapDispatchProps)(Students);