import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { REMOVE_STUDENT } from '../constants/actionTypes';

function StudentDetails({ students, removeStudent }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedStudent = students.find((s) => s.id === parseInt(id))
  console.log(selectedStudent)
  useEffect(() => {
    
  }, [])
  
  return (
    <div>
        <h1>{selectedStudent.name} has {selectedStudent.id}</h1>
        <button
            onClick={() => {
                    removeStudent(selectedStudent.id); 
                    navigate('/');
                }}
        >
            X
        </button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return { students: state.students }
}

const mapDispatchToProps = dispatch => {
    return ({
       removeStudent: (studentId) => {
           dispatch( { type: REMOVE_STUDENT, id:  studentId})
       }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)