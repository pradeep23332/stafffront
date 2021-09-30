import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import Dashboard from './Dashboard';
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Addstaff from './Addstaff'
import Updatestaff from './Updatestaff'
import Protected from './Protected';
import Nurse from './Nurse';
import Metron from './Metron';
import Attendant from'./Attendant';
import Pharmacist from'./Pharmacist';
import Accountant from'./Accountant';
import Receptionist from'./Receptionist';
import Labtech from'./Labtech';
import Radiologist from'./Radiologist';
import Eservice from'./Eservice';
import update from'./Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      {/* <Route path="/add">
        <Protected Cmp={Addstaff}/>
      </Route> */}
      <Route path="/nurse">
        <Protected Cmp={Nurse}/>
        {/*<Nurse/>*/}
      </Route>
      <Route path="/metron">
        <Protected Cmp={Metron}/>
        {/*<metron/>*/}
      </Route>
      <Route path="/attendant">
        <Protected Cmp={Attendant}/>
        {/*<Addstaff/>*/}
      </Route>
      <Route path="/pharmacist">
        <Protected Cmp={Pharmacist}/>
        {/*<Addstaff/>*/}
      </Route>
      <Route path="/accountant">
        <Protected Cmp={Accountant}/>
        {/*<Addstaff/>*/}
      </Route>
      <Route path="/receptionist">
        <Protected Cmp={Receptionist}/>
        {/*<Addstaff/>*/}
      </Route>
      <Route path="/labtechnician">
        <Protected Cmp={Labtech}/>
        {/*<Addstaff/>*/}
      </Route>
      <Route path="/radiologist">
        <Protected Cmp={Radiologist}/>
        {/*<Addstaff/>*/}
      </Route>
      <Route path="/eservice">
        <Protected Cmp={Eservice}/>
        {/*<Addstaff/>*/}
      </Route>
      <Route path="/update">
      <Protected Cmp={Updatestaff}/>
      </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
