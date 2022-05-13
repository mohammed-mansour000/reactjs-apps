import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentDetails from './components/StudentDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* <Student /> */}

          <Routes>
            <Route path='/' element={<Student />}></Route>
            <Route path='/studentDetails/:id' element={<StudentDetails />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
