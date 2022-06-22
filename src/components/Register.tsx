import { SyntheticEvent, useState } from "react";
import { RegisterFormUser } from "../models/register-form-user";

function Register(props: {}) {

    const [registerFormData, updateRegisterFormData] = useState<RegisterFormUser>({
        firstName: '',
        lastName: '',
        age: undefined,
        email: '',
        password: ''
    });

    let [errorMsg, setErrorMsg] = useState('');

    function handleChange(e: SyntheticEvent) {
        const { name, value } = (e.target as HTMLInputElement);
        updateRegisterFormData({...registerFormData, [name]: value});
    }

    let register = async () => {
        /*if (!registerFormData) {
            errorMsg = 'You must fill out all required fields.';
            return;
        }
        
        try {
            await fetch('http://www.example.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerFormData)
            })
        } catch (e: any) {
            setErrorMsg(e.errorMsg);
        }
        */
        console.log(registerFormData);
    }

    return(<>
        <h4>Register</h4>
        <hr></hr>
        <fieldset>
            <div className="reg-container">
            <div className="form=floating">
                First Name:
                <input type="text" className="form-control" name="firstName" maxLength={30} required onChange={handleChange}/>
            </div>
            <div className="form=floating">
                Last Name:
                <input type="text" className="form-control" name="lastName" maxLength={30} required onChange={handleChange}/>
            </div>
            <div className="form=floating">
                Age:
                <input type="text" className="form-control" name="age" maxLength={3} required onChange={handleChange}/>
            </div>
            <div className="form=floating">
                Email:
                <input type="text" className="form-control" name="email" maxLength={50} required onChange={handleChange}/>
            </div>
            <div className="form=floating">
                Password:
                <input type="text" className="form-control" name="password" maxLength={30} required onChange={handleChange}/>
                <div><button name="reg-button" onClick={register}>Register</button></div>
            </div>
            </div>
        </fieldset>
    </>);
}

export default Register;