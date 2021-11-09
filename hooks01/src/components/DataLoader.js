// import React, { Component } from "react";

// export default class DataLoader extends Component {
//   state = { data: [] };

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/todos/")
//       .then(response => response.json())
//       .then(data =>
//         this.setState(() => {
//           return { data };
//         })
//       );
//   }

//   render() {
//     /* return (
//       <div>
//         <ul>
//           {this.state.data.map(el => (
//             <li key={el.id}>{el.title}</li>
//           ))}
//         </ul>
//       </div>
//     ); */
//     return this.props.render(this.state.data);
//   }
// }

// import React, {useState, useEffect} from "react";

// export default function DataLoader() {
//     const [data, setData] = useState([]);
//     const [counter, setCounter] = useState(0);
  
//     // useEffect reaplaces the following class based component events:
//     // ComponentDidMount
//     // ComponentChange
//     // ComponentWillMount
//     useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/todos/")
//         .then(response => response.json())
//         .then(data => {setData(data);console.log(data)});
//         return () => {console.log("Connection Closed!!")}
//     }, [counter]);
  
//     return (
//       <div>
//         <button onClick={() => {setCounter(counter + 1)}}>Click Counter {counter}</button>
//         <ul>
//           {data.map(el => (
//             <li key={el.id}>{el.title}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }


import React from "react";
import useFetch from "./useFetch";

export default function DataLoader(props) {
    const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}