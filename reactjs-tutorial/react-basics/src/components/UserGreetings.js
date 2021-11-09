import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserGreetings extends Component {
    state = {
        isLoggedIn: true
    }

    render() {
        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome khalid</div>
        // }else{
        //     message = <div>Welcome mahmoud</div>
        // }
        // return (
        //     message
        // )
        return(
            this.state.isLoggedIn ?
            <div>Welcome khalid</div> :
            <div>Welcome Guest</div>
        )
    }
}

export default UserGreetings;
