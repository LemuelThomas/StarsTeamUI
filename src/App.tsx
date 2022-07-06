import "./App.css";
import Display_FAQs from "./components/Display_FAQs";
import React from "react";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import GetMovie from "./components/GetMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileScreen from "./components/ProfileScreen";
import Register from "./components/Register";
import Login from "./components/Login";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import Settings from "./components/Settings";
import Shows from "./components/Shows";

function App() {
  return (
    <>
    
      {/* <Nav /> */}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<ProfileScreen />} />
        {/* <Route path='/profile/:id' element={<ProfileScreen />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="/settings/:id" element={<Settings />} /> */}
        <Route path="/movies" element={<GetMovie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/shows/:id" element={<TvDetails />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/faqs" element={<Display_FAQs />} />
      </Routes>
    </>
  );
}

export default App;
