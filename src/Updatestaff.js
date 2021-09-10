import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Dashboard from './Dashboard';

function Update() {
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push("/")
        }

    }, [])
    let user = JSON.parse(localStorage.getItem('user-info'));

    const [id, setId] = useState(user.staff.id)
    const [name, setName] = useState(user.staff.name)
    const [phone, setPhone] = useState(user.staff.phone)
    const [email, setEmail] = useState(user.staff.email)

    async function Update() {
        let item = { id, name, phone, email }
        console.warn(item)

        let result = await fetch("http://localhost:8000/api/update", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'

            }
        })
        result = await result.json()

        localStorage.setItem("user-info", JSON.stringify(result))
        let role = localStorage.getItem('role');
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

    return (
        <div>
            <Dashboard />
            <h1> Update - staff</h1>
            <div className="col-sm-6 offset-sm-3">
                ID:
                <input type="text" value={user.staff.id} className="form-control" readonly="readonly" /><br />

                Name:
                <input type="text" defaultValue={user.staff.name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" /><br />
                Phone:
                <input type="text" defaultValue={user.staff.phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Phone" /><br />
                Email:
                <input type="text" defaultValue={user.staff.email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" /><br />
                <button onClick={Update} className="btn btn-primary">Update</button>

            </div>
        </div>
    )
}
export default Update