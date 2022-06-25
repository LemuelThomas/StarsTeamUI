import { useState } from "react";


function Login() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="login">
            <div className="login_background">
                <img
                    className="login_logo"
                    src="https://images.indianexpress.com/2021/04/pixabay_shooting-star_1200.jpg"
                    alt=""
                />
                <button onClick={() => setSignIn(true)}
                    className="login_button">
                    Sign In
                </button>
                <div className="login_gradient" />

            </div>
            <div className="login_body">
                <>
                    <h1> Stream movies and tv on demand
                    </h1>

                    <h2>Free Sign-Up.</h2>

                    <h3>Ready to stream? Enter your email to start your account</h3>

                    <div className="login_input"></div>
                    <form>
                        <input type='email'
                            placeholder='Email Address'
                        />
                        <input type='password'
                            placeholder='Password'
                        />
                        <button
                            onClick={() => setSignIn(true)}
                            className='login_getStarted'>Get Started</button>

                    </form>
                </>
            </div>
        </div>
    )
}


export default Login;