import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { createContext, useContext } from 'react';
// type Props = {
   
// }

// export default function Settings({}: Props) {
//   return (
//     <div>
//         <h1>Setting</h1>
//     </div>
//   )
// }



export default function Settings(props: {}){
    return (
        <>
            <div className = 'settingsHead'>
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
                
            </div>
        </>
    )
}




