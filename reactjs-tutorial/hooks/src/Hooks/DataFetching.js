import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((result) => {
            setPost(result.data);
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });        
    }, [id])
    return (
        <div>
            {/* <ul>
                {
                    posts.map(e => (
                        <li key={e.id}>{e.title}</li>
                     )
                    )
                }
            </ul> */}
            <input onChange={e => {setId(e.target.value)}}/>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching
