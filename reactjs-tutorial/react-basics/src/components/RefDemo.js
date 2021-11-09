import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RefDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            test: "test"
        }
        this.inputRef = React.createRef();
    }
    
    componentDidMount(){
        this.inputRef.current.focus();
        console.log("mount")
    }
    
    componentDidUpdate(){
        console.log("updated")
    }
    test = (e) => {
        console.log(e.target.value)
        this.setState({
            test: e.target.value
        });

    }
    render() {
        return (
            <div>
                <input ref={this.inputRef} onChange={this.test}/>
            </div>
        )
    }
}

export default RefDemo