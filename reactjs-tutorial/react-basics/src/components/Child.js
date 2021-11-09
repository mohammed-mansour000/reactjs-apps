import React from 'react'

const Child = (props) => {
    console.log(props)
    return (
        <div>
            <button onClick={()=> { props.greetHandler('ahmad') }}>Greet Parent</button>
        </div>
    )
}

export default Child;
