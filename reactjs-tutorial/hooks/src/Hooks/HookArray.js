import React, {useState, useEffect} from 'react'

function HookArray() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 100) + 1
        }])
    }

    useEffect(() => {
        return () => {
            console.log("updated")
        }
    }, [items])
    return (
        <div>
            <button onClick={addItem}>Add a Number</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookArray
