import Dashboard from './Dashboard';
import { Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Nurse() {
    const history = useHistory();

    let role = localStorage.getItem('role');
    let user = localStorage.getItem('user-info');
    user = JSON.parse(user);
    if (role !== 'nurse') {
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
    
    
    /*setInterval(updateClock, 1000);

function updateClock() {
	var myDate = new Date();
	var myClock = document.getElementById("clock");
	
	// getting the Hours, Minutes and Seconds
	var myHours = myDate.getHours();
	var myMinutes = myDate.getMinutes();
	var mySeconds = myDate.getSeconds();
	
	// adding the leading zeros if value is less than 10
	if ( myHours < 10 ) { myHours = "0" + myHours }
	if ( myMinutes < 10 ) { myMinutes = "0" + myMinutes }
	if ( mySeconds < 10 ) { mySeconds = "0" + mySeconds }
	
	// putting it all together
	var myTime = myHours + ":" + myMinutes + ":" + mySeconds;
  myClock.innerText = myTime;
	
}*/

    return (
        <div>
            
            <Dashboard />

            <h1> Nurse profile</h1><br />
            


            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
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
export default Nurse