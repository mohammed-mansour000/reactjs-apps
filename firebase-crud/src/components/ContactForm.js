import React, {useState, useEffect} from 'react'

function ContactForm(props) {
    var initalFieldsValue = {
        username: '',
        mobile: '',
        email: '',
        address: ''
    }

    const [values, setValues] = useState(initalFieldsValue)
    
    const handleSubmitEvent = (e) => {
        e.preventDefault();
        console.log(values)
        props.addOrEdit(values);

    }

    //handling multiple input events
    const handleInputsEvent = (e) => {
        const value = e.target.value;
        console.log(value);
        setValues({
            ...values,
            [e.target.name]: value
        })
    }

    return (
        <div>
            <form onSubmit={(e) => {handleSubmitEvent(e)}}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-user"></i>
                    </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username" 
                        name="username" 
                        value={values.username}
                        onChange={handleInputsEvent}/>
                </div>
                <div className="form-row">
                    <div className="input-group mb-3 col-md-6">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </span>
                        </div>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="mobile" 
                            placeholder="Mobile" 
                            value={values.mobile}
                            onChange={handleInputsEvent}/>
                    </div>
                    <div className="input-group mb-3 col-md-6">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </span>
                        </div>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="email" 
                            placeholder="Email" 
                            value={values.email}
                            onChange={handleInputsEvent}/>
                    </div>
                </div>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        placeholder="Address" 
                        name="address" 
                        value={values.address} 
                        onChange={handleInputsEvent}>
                    </textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Save" className="btn btn-info btn-block"/>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
