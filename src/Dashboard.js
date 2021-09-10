import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
function Dashboard() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    const history = useHistory();
    function Logout() {
        localStorage.clear();
        history.push('/register')

    }
    let role = localStorage.getItem('role');
    console.log(role);
    let loguser = localStorage.getItem('user-info');
    let menutab = '';
    if (role === 'nurse') {
        menutab = <Link to="/nurse" >Nurse</Link>;
    } else if (role === 'metron') {
        menutab = <Link to="/metron" >Metron</Link>;
    } else if (role === 'attendant') {
        menutab = <Link to="/attendant" >Attendant</Link>;
    } else if (role === 'pharmacist') {
        menutab = <Link to="/pharmacist" >Pharmacist</Link>;
    } else if (role === 'accountant') {
        menutab = <Link to="/accountant" >Accountant</Link>;
    } else if (role === 'receptionist') {
        menutab = <Link to="/receptionist" >Receptionist</Link>;
    } else if (role === 'labtechnician') {
        menutab = <Link to="/labtechnician" >Labtech</Link>;
    } else if (role === 'radiologist') {
        menutab = <Link to="/radiologist" >Radiologist</Link>;
    } else if(role === 'eservice'){
        menutab = <Link to="/eservice" >Eservice</Link>;
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="#home">M-satff</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                    {
                        role && loguser ?
                            <>
                                {menutab}
                            </>
                            :
                            <>
                                <Link to="/login" >Login</Link>
                                <Link to="/register" >Register</Link>
                            </>
                    }
                    { /*who log to system*/}
                </Nav>
                {localStorage.getItem('user-info') ?
                    <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null
                }

            </Navbar>

        </div>
    )
}
export default Dashboard