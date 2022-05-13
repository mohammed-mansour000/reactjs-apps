import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'green', 'blue', 'black', 'yellow', 'pink', 'white'];
    const randomColor = colors[Math.floor(Math.random() * 6)];
    const className = randomColor + '-text';

    return ((props) => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    ));
}

export default Rainbow