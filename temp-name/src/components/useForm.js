import React, { useState } from 'react'

function UseForm(initializeValues, setCurrentId) {
    const [values, setvalues] = useState(initializeValues);
    const [errors, seterrors] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setvalues({
            ...values,
            [name]: value
        })
        console.log(values)
    }

    const resetForm = () =>{
        setvalues(initializeValues);
        seterrors({});
        setCurrentId(0)
    }
    return {
        values,
        setvalues,
        errors,
        seterrors,
        handleInputChange,
        resetForm
    }
}

export default UseForm
