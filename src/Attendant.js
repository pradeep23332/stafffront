import Dashboard from './Dashboard';
import { Table } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function Attendant() {
    const history= useHistory();

    let role = localStorage.getItem('role');
    let user = localStorage.getItem('user-info');
    user = JSON.parse(user);
    if(role !== 'attendant') {
        history.push('/');
    }
    async function deleted() {

        let result = await fetch("http://localhost:8000/api/del/" + user.staff.id, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'

            }
        })
        await Logout();
    }

    function Logout() {
        localStorage.clear();
        history.push('/register')

    }
    return (
        <div>
            <Dashboard />
            <h1> Attendant profile</h1>
            <br/>
            <br/><br/><br/>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.staff.name}</td>
                        <td>{user.staff.phone}</td>
                        <td>{user.staff.email}</td>

                        
                    </tr>

                </tbody>
            </Table>
            <a href="/update" className="btn btn-primary">Update</a>
            <button onClick={deleted} className="btn btn-primary" >Delete</button>
            <a href="/#" className="btn btn-primary">Finance section</a>
        </div>
    )
}
export default Attendant