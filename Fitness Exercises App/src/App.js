import logo from './logo.svg';
import './App.css';

//routes
import { Route, Routes } from 'react-router-dom';

//mui
import { Box } from '@mui/material';

//pages
import ExerciseDetail from './Pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';

function App() {
  return (
   <Box width={400} sx={{width: {xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
   </Box>
  );
}

export default App;
