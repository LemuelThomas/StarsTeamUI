import React, { useState, useContext } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { number, string } from 'yargs';
import { GlobalContext } from './GlobalState';
import Register from './Register';
import { RegisterFormUser } from '../models/register-form-user';
import { LoggedInUserType } from '../models/logged-in-user';
import {Navigate} from 'react-router-dom';
// class MainAccs{
//     private accId: number;
//     private firstName: string;
//     private lastName: string;
//     private username: string;
//     private password: string;
//     private age: Date;
//     private Subscription: number;

//     constructor(accId: number, firstName: string, lastName: string, username: string, password: string, age: Date, Subscription: number){
//         this.accId = accId;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.username = username;
//         this.password = password;
//         this.age = age;
//         this.Subscription = Subscription;
//     }  
// }
interface ISettingsProps {
    currentUser: LoggedInUserType | undefined
  }

export default function Settings(props: ISettingsProps){
    const user = useContext(GlobalContext)
    const [MainAccData, setMainAccData] =
    useState({
        accId: undefined,
        firstName: '', 
        lastName: '', 
        username: '', 
        password: '', 
        age: '',
        Subscription: undefined,
        AccUsers: ''
    });
    // useEffect(() => {
    //     fetch(`localhost:5000/MovieApp/main/`)
    //     .then(resp => resp.json()).then(data => (
    //         console.log(data)
    //     ));

    // }, []);
    
    return (
        !props.currentUser ? <Navigate to="/login"/> :
        // const loggedInUser = user.map(({firstName, lastName, age, email, password}: RegisterFormUser) => (
            <>
            <div className = 'settingsHead'>
                <h1>Settings</h1>
            </div>
            <div className = 'Settingsbody'>
                <h2>Profile</h2>
                <p>Name: {props.currentUser.authFirstName} {props.currentUser.authLastName} </p>
                <p>Username: {props.currentUser.authEmail}</p>
                <p>Password: {props.currentUser.authPassword}</p>
                <p> Age: {props.currentUser.authAge.toString()} </p>
                <p>Subscription: {props.currentUser.authSubscription} </p>
                {/* <p>Users: {props.currentUser.authAccUsers}</p> */}
            </div>
            <div className = 'settingsButton'>
                <Grid container justifyContent={"center"}>
                    <Button variant="contained" color="error" href="#contained-buttons">
                    Logout
                </Button>
                </Grid>
            </div>
        </>
            
        )
        // );
    //     <div>
    //     {user.map((user: RegisterFormUser) => (
    //         <><div className='settingsHead'>
    //             <h1>Settings</h1>
    //         </div><div className='Settingsbody'>
    //                 <h2>Profile</h2>
    //                 <p>Name: user.firstName {lastName} </p>
    //                 <p>Username: {email}</p>
    //                 <p>Password: {password}</p>
    //                 <p>Age: {age}</p>
    //                 <p>Subscription: </p>
    //             </div><div className='settingsButton'>
    //                 <Grid container justifyContent={"center"}>
    //                     <Button variant="contained" color="error" href="#contained-buttons">
    //                         Logout
    //                     </Button>
    //                 </Grid>

    //             </div></>
    //     ))}
            {/* <div className = 'settingsHead'>
                <h1>Settings</h1>
            </div>
            <div className = 'Settingsbody'>
                <h2>Profile</h2>
                <p>Name: </p>
                <p>Username: </p>
                <p>Password: </p>
                <p>Age: </p>
                <p>Subscription: </p>
            </div>
            <div className = 'settingsButton'>
                <Grid container justifyContent={"center"}>
                    <Button variant="contained" color="error" href="#contained-buttons">
                    Logout
                </Button>
                </Grid>
                
            </div> */}
        // </div>

    // )
}




// function useState<T>(arg0: { firstName: string; lastName: string; username: string; password: string; Age: undefined; Subscription: undefined; }): [any] {
//     throw new Error('Function not implemented.');
// }

