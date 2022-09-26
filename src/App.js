import {BrowserRouter, Route, Switch} from "react-router-dom";
//pages and components
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import Create from "./pages/create/Create";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Dashboard/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/project/:id">
              <Project/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
