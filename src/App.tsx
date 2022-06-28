import React  from 'react';

import Nav from './components/Nav';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';
import GetMovie from './components/GetMovie';
import { Route, Routes } from 'react-router-dom'


function App(): JSX.Element {
  return (
    <>
  <Nav/> 

    
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/movies' element={<GetMovie />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
