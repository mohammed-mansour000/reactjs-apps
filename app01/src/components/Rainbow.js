import React from 'react'

export default function Rainbow(WrappedCmp) {
    const colors = ['red', 'green', 'blue', 'black', 'yellow', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + "-text";
    console.log(randomColor)
    return ((props) =>(
            <div className={className}>
                XXXXXXX
                <WrappedCmp {...props}/>
                XXXXXXX
            </div>
        )
    )
}
