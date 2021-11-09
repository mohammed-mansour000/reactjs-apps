// import React, { Component } from "react";
import React, { useState  } from "react";

export default function Button() {
    // useState is a function that returns an array of 2 elements
    // the first element (buttonText) is the state
    // the second element (setButtonText) is only function
    // that affects the state (buttonText)
    const [buttonText, setButtonText] = useState("Click me, please");
  
    return (
      <button onClick={() => setButtonText("Thanks, been clicked!")}>
        {buttonText}
      </button>
    );
  }

// export default class Button extends Component {
//   constructor() {
//     super();
//     this.state = { buttonText: "Click me, please" };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(() => {
//       return { buttonText: "Thanks, been clicked!" };
//     });
//   }

//   render() {
//     const { buttonText } = this.state;
//     return <button onClick={this.handleClick}>{buttonText}</button>;
//   }
// }