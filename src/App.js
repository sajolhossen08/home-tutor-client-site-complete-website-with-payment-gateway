import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import User from "./Components/User/User";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const [user, setUser] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <LogIn />
          </Route>

          <PrivateRoute path={`/user/:userServiceKey`}>
            <User/>
          </PrivateRoute>
          
          <PrivateRoute path='/user/admin'>
            <User/>
          </PrivateRoute>

          <Route exact path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
