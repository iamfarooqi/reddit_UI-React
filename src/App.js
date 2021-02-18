import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./components/Login/login"
import Signup from "./components/Signup/signup"
import Dashboard from "./components/dashboard/dashboard"





function App() {
  return (
    <div className="App">





      <Router>

        <nav>
          <ul>
            <li>
              <Link to="/">login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
          </ul>
        </nav>


        <Switch>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route exact={true}  path="/">
            <Login />
          </Route>






        </Switch>

      </Router>



    </div>
  );
}

export default App;