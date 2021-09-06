import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link,useHistory } from 'react-router-dom'
function Dashboard() {
    let user= JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();
    function Logout()
    {
        localStorage.clear();
        history.push('/register')

    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="#home">M-satff</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                    {
                        localStorage.getItem('user-info')?
                        <>
                        <Link to="/add" >Addstaff</Link>
                        <Link to="/update" >Updatestaff</Link>
                        </>
                        :
                        <>
                        <Link to="/login" >Login</Link>
                        <Link to="/register" >Register</Link>
                        </>
                    }
                   { /*who log to system*/}
                    </Nav>
                    {localStorage.getItem('user-info')?
                    <Nav>
                        <NavDropdown title={user &&user.name}>
                            <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    :null
                    }

            </Navbar>

        </div>
    )
}
export default Dashboard