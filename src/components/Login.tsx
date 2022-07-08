import { useState, SyntheticEvent } from "react";
import { Link, Navigate } from "react-router-dom";
import { LoggedInUserType } from "../models/logged-in-user";

interface ILoginProps {
    currentUser: LoggedInUserType | undefined, 
    setCurrentUser: (nextUser: LoggedInUserType) => void
}


function Login(props: ILoginProps) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState<string>();

    let updateEmail = (e: SyntheticEvent) => {
        setEmail((e.target as HTMLInputElement).value);
    }

    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value);
    }

    let handleSubmit = async(e: SyntheticEvent) => {
        e.preventDefault()
        if (!email || !password) {
            setErrorMsg('You must provide a username and a password!');
        } else {
            setErrorMsg('welcome ' + email );
        }

        try {
            let resp = await fetch('http://Starsteamapi-env-2.eba-sjpuj72h.us-east-1.elasticbeanstalk.com/MovieApp/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })

            if (resp.status !== 200) {
                setErrorMsg('Could not validate provided credentials!');
            } else {
                props.setCurrentUser(await resp.json())
            }
        } catch (err) {
            setErrorMsg('There was an error communicating with the API');
        }  
    }

    console.log(props.currentUser)

    return (
        props.currentUser ? <Navigate to="/"/> :
        <div className="login">
            <div className="login_background">
                <img 
                className="login_logo"
                src="https://images.indianexpress.com/2021/04/pixabay_shooting-star_1200.jpg" 
                alt="" 
             />

            <Link to={"/register"}> 
            
            <button
         className="login_button">
       Register
        </button>
           
            </Link>

        
        <div className="login_gradient" />
        
        </div>
        <div className="login_body">
        <h1> Stream movies and tv on demand
        </h1>
       
        <h2>Free Sign-Up.</h2>
        
        <h3>Ready to stream? Enter your email to start your account</h3>

        <div className="login_input"></div>
        <form
        onSubmit={handleSubmit}> 
            <input type='text'
            placeholder='Email Address'
            name="email"
            onChange={updateEmail}
            />
             <input type='password'
            placeholder='Password'
            name="password"
            onChange={updatePassword}
            />
            <button 
            className='login_getStarted'>Login</button>
        </form>
       
        { errorMsg ? 
                <div>{errorMsg}</div>
                :
                <div></div>    
            }
        </div>
        </div>
    )
}


export default Login;