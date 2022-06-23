import React  from 'react';
import './App.css';

import Homepage from './components/Homepage';
import GetMovie from './components/GetMovie';
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/movies' element={<GetMovie />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
