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
      <Route path="/add">
        <Protected Cmp={Addstaff}/>
        {/*<Addstaff/>*/}
      </Route>
      <Route path="/update">
      <Protected Cmp={Updatestaff}/>
        {/*<Updatestaff/>*/}
      </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
