import React, {useState, useEffect} from 'react'
import { RegisterFormUser } from '../models/register-form-user';
const GlobalContext = React.createContext<any>({});
type ItemProp = {
  children: React.ReactNode
}
const GlobalProvider = ({children}: ItemProp) => {
    const [user, setUser] = useState<RegisterFormUser>({
      firstName: 'tester',
      lastName: 'mctesterson',
      age: 20,
      email: 'test@gmail.com',
      password: '12345'})
    const [movies, setmovies] = useState([]);


  return (
    <GlobalContext.Provider value={{user, setUser}}>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider, GlobalContext};