import React  from 'react';
import './App.css';
import GetShows from './components/GetShows';
import Homepage from './components/Homepage';
import GetMovie from './components/GetMovie';
import { Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import Login from './components/Login';
import Register from './components/Register';
=======
import ProfileScreen from './components/ProfileScreen';
import Register from './components/Register';
import Login from './components/Login';
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails';

>>>>>>> d0e4dd1cef9bccbd136d0cfa96a6eb2ad3377aab

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/movies' element={<GetMovie />} />
<<<<<<< HEAD
        <Route path='/shows' element={<GetShows />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
=======
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/shows/:id' element={<TvDetails />} />
>>>>>>> d0e4dd1cef9bccbd136d0cfa96a6eb2ad3377aab
      </Routes>
    </>
  );
}

export default App;
