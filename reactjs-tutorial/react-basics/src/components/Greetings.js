import React from 'react'

const Greetings = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Greetings Component with { props.name }
            </h1>
            { props.children }
        </div>
    )
}

export default Greetings;
