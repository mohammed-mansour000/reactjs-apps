import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value);
        getQuery(e.target.value);
    }
    return (
        <div className="search">
            <form>
                <input 
                    type="text"
                    placeholder="Search Characters"
                    autoFocus
                    value={text}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Search
