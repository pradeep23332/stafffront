import React ,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Dashboard from './Dashboard';

function Register()

{
    useEffect(()=>{
        let role = localStorage.getItem('role');

            if(localStorage.getItem('user-info'))
            
            {
                if(role === 'nurse') {
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
                }else if (role === 'radiologist') {
                    history.push('/radiologist')
                }else if (role === 'eservice') {
                    history.push('/eservice')
                }
            }

    },[])
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [stafftype,setStafftype]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const history= useHistory();

    async function signUp()
    {
        let item={name,phone,stafftype,email,password}
        console.warn(item)    

        let result= await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'

            }
        })
        result =await result.json()
        // localStorage.setItem("user-info",JSON.stringify(result))
            history.push('/login')
            
        }   
    return(
        <>
        <Dashboard/>
        
        <div className="col-sm-6 offset-sm-3">
            <h1> Staff Register Page</h1>
            <br/>
            <input type="text"value={name} onChange={(e)=>setName(e.target.value)} className="form-control"placeholder="Name" />
            <br/>
            <input type="text"value={phone} onChange={(e)=>setPhone(e.target.value)}className="form-control"placeholder="Phone number" />
            <br/>
            <input type="text"value={stafftype} onChange={(e)=>setStafftype(e.target.value)}className="form-control"placeholder="Staff Type" />
            <br/>
            <input type="text"value={email}onChange={(e)=>setEmail(e.target.value)} className="form-control"placeholder="Email" />
            <br/>
            <input type="password"value={password}onChange={(e)=>setPassword(e.target.value)} className="form-control"placeholder="Password" />
            <br/>
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
        </>
    )
}
export default Register