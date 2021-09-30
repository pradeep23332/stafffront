/*import React ,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Dashboard from './Dashboard';

function Update()
{
    const history = useHistory();
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            history.push("/")
        }

    },[])
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    let user = JSON.parse(localStorage.getItem('user-info'));

    return(
        <div>
            <Dashboard/>
            <h1> Update - staff</h1>
            <div className="col-sm-6 offset-sm-3">

            <input type="text" defaultValue={user.staff.name} onChange={(e)=>setName(e.target.value)} className="form-control"placeholder="Name" /><br/>
            <input type="text"value={name} onChange={(e)=>setName(e.target.value)} className="form-control"placeholder="Name" /><br/>
            <input type="text"value={name} onChange={(e)=>setName(e.target.value)} className="form-control"placeholder="Name" />
            </div>
        </div>
    )
}
export default Update*/