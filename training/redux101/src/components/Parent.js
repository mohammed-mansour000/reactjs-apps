import React from 'react'
import Child from './Child'



const Parent = () => {
    const myEmail = "hamzi@gmail.com";
    const showName  = (name) => {
        alert(name)
    }
  return (
    <div>
        <Child name={'hamzi'}  age={3} email={myEmail} showName={showName}/>
        <Child name={'yousef'}  showName={showName} />
        <Child name={'ab hassan'}  showName={showName} />
    </div>
  )
}

export default Parent