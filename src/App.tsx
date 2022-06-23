import React  from 'react';
import './App.css';

import Homepage from './components/Homepage';
import GetMovie from './components/GetMovie';
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/movies' element={<GetMovie />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/shows/:id' element={<TvDetails />} />
      </Routes>
    </>
  );
}

export default App;
