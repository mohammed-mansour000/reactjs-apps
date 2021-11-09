import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errMsg: null
        }
    }
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos").then((postsList) => {
            console.log(postsList.data)
            this.setState({posts: postsList.data});
        }).catch((err) => {
            console.log(err)
            this.setState({errMsg: err})
        });
    }
    render() {
        const { posts, errMsg } = this.state;
        return (
            <div>
                {
                    posts.length ? 
                    posts.map(post =>   <div key={post.id}>
                                            {post.title} 
                                            {post.completed ? 
                                            <span style={{color: "green"}}>completed</span> 
                                            : 
                                            <span style={{color: "red"}}>not completed</span>
                                            }
                                        </div>
                            ) 
                    :
                    null 
                }
                {errMsg ? <h1 style={{color: "red"}}>{errMsg.message}</h1> : null}
            </div>
        )
    }
}

export default PostList
