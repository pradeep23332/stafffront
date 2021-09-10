import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Dashboard from './Dashboard';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
        let role = localStorage.getItem('role');

        if (localStorage.getItem('user-info')) {
            if (role === 'nurse') {
                history.push('/nurse')
            } else if (role === 'metron') {
                history.push('/metron')
            } else if (role === 'attendant') {
                history.push('/attendant')
            } else if (role === 'pharmacist') {
                history.push('/pharmacist')
            } else if (role === 'accountant') {
                history.push('/accountant')
            } else if (role === 'receptionist') {
                history.push('/receptionist')
            } else if (role === 'labtechnician') {
                history.push('/labtechnician')
            } else if (role === 'radiologist') {
                history.push('/radiologist')
            } else if (role === 'eservice') {
                history.push('/eservice')
            }
        }

    }, [])
    async function login() {
        console.warn(email, password)
        let item = { email, password }
        let result = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)


        });
        result = await result.json();


        if (result.error) {             /**/

            console.log(result.error)  

        } else {

            localStorage.setItem("user-info", JSON.stringify(result))
            localStorage.setItem('role', result.role);

            if (result.role === 'nurse') {
                history.push('/nurse')
            } else if (result.role === 'metron') {
                history.push('/metron')
            } else if (result.role === 'attendant') {
                history.push('/attendant')
            } else if (result.role === 'pharmacist') {
                history.push('/pharmacist')
            } else if (result.role === 'accountant') {
                history.push('/accountant')
            } else if (result.role === 'receptionist') {
                history.push('/receptionist')
            } else if (result.role === 'labtechnician') {
                history.push('/labtechnician')
            } else if (result.role === 'radiologist') {
                history.push('/radiologist')
            } else if (result.role === 'eservice') {
                history.push('/eservice')
            }
        }
        /*if email or password is correct redirect to add page*/
    }
    return (
        <div>


            <Dashboard />

            <h1> M- staff Login</h1>
            <br /><br /><br />
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} className="form-control" />
                <br />
                <input type="password" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                <div></div>  
                <br />
                <button onClick={login} className="btn btn-primary" >Login</button>

            </div>
        </div>
    )
}
export default Login