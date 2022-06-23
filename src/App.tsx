import React  from 'react';
import './App.css';

import Homepage from './components/Homepage';
import GetMovie from './components/GetMovie';
import { Route, Routes } from 'react-router-dom'
import ProfileScreen from './components/ProfileScreen';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/movies' element={<GetMovie />} />
      </Routes>
    </>
  );
}

export default App;
