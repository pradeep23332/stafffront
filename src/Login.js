import React ,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Dashboard from './Dashboard';
function Login()
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history= useHistory();
        useEffect(()=>{
            if(localStorage.getItem('user-info'))
            {
                history.push("/add")
            }
    
        },[])
        async function login()
        {
            console.warn(email,password)
            let item={email,password}
            let result= await fetch("http://localhost:8000/api/login",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":'application/json'
                },
                body:JSON.stringify(item)


            });
            result = await result.json();
            localStorage.setItem("user-info",JSON.stringify(result))
            history.push("/add")  /*if email or passwprd is correct redirect to add page*/
        }
        return (
        <div>

            <Dashboard/>

            <h1> M- staff Login</h1>
            <br/><br/><br/>
            <div className="col-sm-6 offset-sm-3">
             <input type="text" placeholder="Email" 
             onChange={(e)=>setEmail(e.target.value)} className="form-control" />
             <br/>
             <input type="password" placeholder="Password"
             onChange={(e)=>setPassword(e.target.value)}  className="form-control" />   
             <br/>

             <button onClick={login} className="btn btn-primary" >Login</button>

            </div>
        </div>
    )
}
export default Login