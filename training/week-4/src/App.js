import './App.css';
import React ,{useState,useEffect,memo} from 'react'


const App = () => {
  const [greeting, setGreeting] = useState('Hello React!');
  const [count, setCount] = useState(0);

  const handleIncrement = () =>
    setCount(currentCount => currentCount + 1);

  const handleDecrement = () =>
    setCount(currentCount => currentCount - 1);

  const handleChange = event => setGreeting(event.target.value);

  return (
    <div>
      <input type="text" onChange={handleChange} />

      <Count count={count} />

      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

// const Count = ({ count }) => {
//   console.log('Does it (re)render?');
//   return <h1>{count}</h1>;
// };

const Count = memo(({ count }) => {
  console.log('Does it (re)render?');
  return <h1>{count}</h1>;
});

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [age, setAge] = useState(20);

//   useEffect(
//     () => {
//       //klasdfkjasdfhasjkldfhasdjk
//       return function cleanup() {
//         // will fire as if it's unmount
//       };
//     },
//     []   
//   );

//   // Comoponent Did Mount
//   useEffect(
//             () => setCount(currentCount => currentCount + 50),           
//             []
//           );

//   // Monitoring any change that happens to Age State
//   useEffect(
//     () => alert('Age has changed'), 
//     [age]  
//   );

//   // Monitoring any change that happens to Count State
//   // useEffect(
//   //   () => alert('Count has changed'), 
//   //   [count]  
//   // );

//   // Monitoring any change that happens to Count State
//   useEffect(
//     () => console.log('Count and/or Age have been changed'), 
//     [age,count]  
//   );

//   const handleAgeIncrement = ()=>{
//     setAge(preAge => preAge + 5)
//   }

//   const handleIncrement = () =>
//   {
//     //setCount(count +1)
//     setCount(currentCount => currentCount + 1);
//   }
    
  
//   const handleDecrement = () =>
//   {
//     setCount(count-1);
//     //setCount(currentCount => currentCount - 1);
//   }
  

//   return (
//     <div>
//       <h1>{count}</h1>
//       <h1>{age}</h1>
//       <button type="button" onClick={handleAgeIncrement}>
//         Increment age
//       </button>
//       <button type="button" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button type="button" onClick={handleDecrement}>
//         Decrement
//       </button>
//     </div>
//   );
// };


// const App =()=>{  
//   const [greeting, setGreeting] = useState(
//     'Hello Function Component!'
//   );
//   const handleChange = event => setGreeting(event.target.value); 
//   return (    
//     <Headline headline={greeting} onChangeHeadline={handleChange }  />
//   );
// }


// const App = () => {
//   const sayHello = () => alert('Hello');
//   return <Button handleClick={sayHello} />;
// };

// const Button = ({ handleClick }) => (
//   <button type="button" onClick={handleClick}>
//     Button
//   </button>
// );

// Button.defaultProps = {
//   handleClick: () => alert('Default'),
// };

// const Button = ({ handleClick }) => {
//   const sayDefault = () =>alert('Default');

//   const onClick = handleClick || sayDefault;

//   return (
//     <button type="button" onClick={onClick}>
//       Button
//     </button>
//   );
// };


const Headline = ({ headline, onChangeHeadline }) => (
  <div>
    <h1>{headline}</h1>

    {/* <input type="text" value={headline} onChange={onChangeHeadline} /> */}
    <Input value={headline} onChangeInput={onChangeHeadline} >
      {()=>{alert(Math.random())}}
    </Input>
  </div>
);
const Input = ({ value, onChangeInput, children }) => (
  <label>
    <h2>{children}</h2>
    <button onClick={()=>children()}>Fire It</button>
    <input type="text" value={value} onChange={onChangeInput} />
  </label>
);

// const Headline = () => {
//   const [Name, setName] = useState(
//     'Hello Function Component!'
//   );

//   const f1 = ()=>{
//      setName('Issa')    
//   }

//   const changeHandler = event => setName(event.target.value)

//   return (
//     <div>
//       <h1>{Name}</h1>
//       <button onClick={()=>{f1()}}>test</button>
//       <input
//         type="text"
//         value={Name}
//         onChange={changeHandler}
//       />
//     </div>
//   );
// };

// const HeadLine = () => {
//  // UseState is a functiont hat accepts One Parameter and returns an arrya of 2 Entries
//   const [val1, setval1] =  useState('Hello Function Component!');
//   const [val2, setval2] =  useState(1);
//   const [data, setData] =  useState(['Abed','Joseph','Samer']);
//   const [anotherData, setanotherData] =  useState({id:1,name:'Abd'});
//   return <h1>{val1} / {val2}</h1>;
// };

// const HeadLine = ({name,age})=>
// {  
//   return (
//     <div>
//         {name} has {age} years
//     </div>
//   );
// }

// function HeadLine({name,age})
// {  
//   return (
//     <div>
//         {name} has {age} years
//     </div>
//   );
// }

// function HeadLine(props) / 1st Method
// {  
//   return (
//     <div>
//         {props.value}
//     </div>
//   );
// }

export default App;

// export class Parent extends React.Component{
//   state = {id:1, name:'Mhmd'}
  
//   render(){

//     return (<div><Child xyz={'x'} MyName={'rony'} /></div>)
//   }
// }

// export class Child extends React.Component{
//   render(){
//     return (<div>{this.props.MyName + this.props.xyz}</div>)
//   }
// }

