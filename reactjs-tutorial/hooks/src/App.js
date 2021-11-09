import logo from './logo.svg';
import './App.css';
import HookCounter from './Hooks/HookCounter';
import HookArray from './Hooks/HookArray';
import ClassMouse from './Components/ClassMouse';
import HookMouse from './Hooks/HookMouse';
import MouseContainer from './Hooks/MouseContainer';
import IntervalCounterClass from './Components/IntervalCounterClass';
import IntervalCounterHook from './Hooks/IntervalCounterHook';
import DataFetching from './Hooks/DataFetching';

function App() {
  return (
    <div className="App-header">
      {/* <HookCounter /> */}
      {/* <HookArray /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalCounterClass /> */}
      {/* <IntervalCounterHook /> */}
      <DataFetching />
    </div>
  );
}

export default App;
