import logo from './logo.svg';
import './App.css';

import UserGreetings from './components/UserGreetings';
import Greetings from './components/Greetings';
import Message from './components/Message';
import Counter from './components/Counter';
import Parent from './components/Parent';
import NameList from './components/NameList';
import Form from './components/Form';
import RefDemo from './components/RefDemo';
import ClickCounter from './components/ClickCounter';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      {/* <Greetings name="hamzi">
        <p>this child paragraph</p>
      </Greetings>
      <Greetings name="jarad"></Greetings>
      <Greetings name="anas"></Greetings>
      <Message></Message>
      <Counter></Counter>
      <Parent></Parent> 
      <UserGreetings></UserGreetings>
      <NameList></NameList>
    
    <Form></Form>
    <RefDemo></RefDemo>
    <ClickCounter></ClickCounter>
    */}
    <PostList></PostList>
    </div>
  );
}

export default App;
