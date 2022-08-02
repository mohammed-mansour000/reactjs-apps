import React from 'react'

const Child = (props) => {
  return (
    <div>
        {props.name} {props.age} {props.email}
        <button onClick={() => { props.showName(props.name) }}>click</button>
    </div>
  )
}

export default Child