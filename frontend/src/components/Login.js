import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {host} from '../host.mjs';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    const {showAlert} = props
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();

        if(json.success){
            // Save the auth-token and redirect
            localStorage.setItem("token", json.authtoken)
            showAlert("Logged In Successfully", "success")
            navigate("/")
        }
        else{
            showAlert("Invalid Credentials", "danger")
        }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='mt-2'>
            <h2 className='my-3'>Login to continue to MyNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} name="email" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login