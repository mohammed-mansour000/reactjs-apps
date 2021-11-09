import React from 'react'
import Rainbow from './Rainbow';


const Contact = (props) => {
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, quaerat praesentium voluptatem sint explicabo ad aut temporibus maiores a. Tempora rem minima maxime reiciendis voluptatem quod distinctio, quia molestiae ipsum</p>
            <button className="btn btn-primary float-left" onClick={()=>{props.history.push('/about')}}>Go to About</button>
        </div>
    )
}

export default Rainbow(Contact);
