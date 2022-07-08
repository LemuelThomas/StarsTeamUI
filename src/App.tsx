import "./App.css";
import Display_FAQs from "./components/Display_FAQs";
import { useState }from 'react';
import Homepage from "./components/Homepage";
import Nav from './components/Nav';
import GetMovie from './components/GetMovie';
import { Route, Routes } from 'react-router-dom'
import ProfileScreen from './components/ProfileScreen';
import Register from './components/Register';
import Login from './components/Login';
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails';
import Settings from './components/Settings';
import Shows from './components/Shows';
import WatchList from "./components/WatchList";
import { LoggedInUserType } from "./models/logged-in-user";


function App(): JSX.Element {

  const [authUser, setAuthUser] = useState<LoggedInUserType>()


  return (
    <>

<Nav /> 
      <Routes>
        <Route path='/' element={<Homepage  currentUser={authUser} />} />
        <Route path='/register' element={<Register currentUser={authUser} />} />
        <Route path='/login' element={<Login currentUser={authUser} setCurrentUser={setAuthUser} />} />
        <Route path='/profile' element={<ProfileScreen currentUser={authUser} />} />
        <Route path='/settings' element={<Settings currentUser={authUser}/>} />
        <Route path='/settings/:id' element={<Settings currentUser={authUser}/>} />
        <Route path='/movies' element={<GetMovie currentUser={authUser} />} />
        <Route path='/movies/:id' element={<MovieDetails currentUser={authUser}/>} />
        <Route path='/shows' element={<Shows currentUser={authUser} />} />
        <Route path='/shows/:id' element={<TvDetails currentUser={authUser} />} />
        <Route path='/faqs' element={<Display_FAQs currentUser={authUser} />} />
        <Route path='/watchlist' element={<WatchList id={1} currentUser={authUser} />} />
      </Routes>
    </>
  );
}

export default App;
