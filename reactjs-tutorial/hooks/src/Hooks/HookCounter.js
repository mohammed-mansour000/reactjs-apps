import React, {useState} from 'react';

function HookCounter() {
    const [count, setCount] = useState(0);

    const incrementByFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <div>
                <button onClick={() => {setCount(count + 1)}}>Increment</button>
            </div>
            <div>
                <button onClick={() => {setCount(count - 1)}}>Decrement</button>
            </div>
            <div>
                <button onClick={() => {setCount(0)}}>Reset</button>
            </div>
            <div>
                <button onClick={incrementByFive}>Increment 5</button>
            </div>
        </div>
    )
}

export default HookCounter; 