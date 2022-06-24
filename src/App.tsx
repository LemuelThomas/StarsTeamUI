import React  from 'react';
import './App.css';
import Homepage from './components/Homepage';
import GetMovie from './components/GetMovie';
import { Route, Routes } from 'react-router-dom'
import ProfileScreen from './components/ProfileScreen';
import Register from './components/Register';
import Login from './components/Login';
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails';
import Settings from './components/Settings';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/profile' element={<ProfileScreen />} />
        {/* <Route path='/profile/:id' element={<ProfileScreen />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/settings/:id' element={<Settings/>} />
        <Route path='/movies' element={<GetMovie />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/shows/:id' element={<TvDetails />} />
      </Routes>
    </>
  );
}

export default App;
