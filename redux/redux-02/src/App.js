import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import
{
  increment, 
  decrement,
  login,
  logout,
  reset,
  getData,
  clearData
}
from './redux/actions';
import { useEffect } from 'react';

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const auth = useSelector((state) => state.authReducer)
  const data = useSelector((state) => state.dataReducer)
  const dispatch = useDispatch();

  const { remotePosts } = data;
  useEffect(() => {
   
    console.log(remotePosts);
  
  }, [data])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello World <br /> A little Redux Project. YaaY!
        </h1>
        <h3>Counter</h3>
        <h3>{counter}</h3>
        <button onClick={() => { dispatch(increment()) }}>+</button>
        <button onClick={() => { dispatch(decrement()) }}>-</button>
        <button onClick={() => { dispatch(reset()) }}>reset</button>

        <h2>For Logged in users only</h2>
        <p>Log in to see a secret about me</p>
        <button onClick={() => { dispatch(login()) }}>Login</button>
        <button onClick={() => { dispatch(logout()) }}>Logout</button>

       
        {
          auth ? (
            <div>
              <p>
                I don't Know more than 50% of redux. But if you know 50% of it, you're like a Superman.
              </p>
            </div>
          ) : 
          (
            "not authenticated"
          )
        }

        <button onClick={() => { dispatch( getData()) }}>fetch posts</button>
        <button onClick={() => { dispatch( clearData()) }}>clear posts</button>

        {
          remotePosts?.length ? (
            <div>fetched posts</div>
          ) : (
              <div>no posts</div>
          )
        }
      </header>
    </div>
  );
}

export default App;
