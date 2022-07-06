import { Navigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { LoggedInUserType } from '../models/logged-in-user';

interface ISettingsProps {
    currentUser: LoggedInUserType| undefined
  }


export default function Settings(props: ISettingsProps){
    return (
        !props.currentUser ? <Navigate to="/login"/> :
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




