import React from 'react'
import ContactForm from './ContactForm';
import firebaseDB from "../firebase";

const Contact = () => {

    const addOrEdit = obj => {
        
    }
    return (
        <>
         <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1>Contact Register</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-5">
                <ContactForm addOrEdit={addOrEdit}/>
            </div>
            <div className="col-md-7">
                list of contacts
            </div>
        </div>
        </>        
    )
}

export default Contact
