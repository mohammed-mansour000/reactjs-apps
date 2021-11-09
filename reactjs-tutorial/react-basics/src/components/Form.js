import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            topics: 'React'
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
        console.log(this.state.username)
    }

    handleTopicChange = (e) => {
        this.setState({
            topics: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            username: this.state.username,
            topics: this.state.topics
        }
        console.log(data)
    }

    render() {
        const {username, topics} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input value={username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={topics} onChange={this.handleTopicChange}>
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;