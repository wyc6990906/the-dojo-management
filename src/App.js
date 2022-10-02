import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
//pages and components
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import Create from "./pages/create/Create";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {useAuthContext} from "./hooks/useAuthContext";
import './App.css'

function App() {
  const {user, authIsReady} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar/>}
          <div className="container">
            <Navbar/>
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login"/>}
                {user && <Dashboard/>}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/login"/>}
                {user && <Create/>}
              </Route>
              <Route path="/projects/:id">
                {!user && <Redirect to="/login"/>}
                {user && <Project/>}
              </Route>
              <Route path="/login">
                {user && <Redirect to="/"/>}
                {!user && <Login/>}
              </Route>
              <Route path="/signup">
                {user && <Redirect to="/"/>}
                {!user && <Signup/>}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
