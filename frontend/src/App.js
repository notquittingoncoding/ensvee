import "./App.css";
import { Login } from "./Login/Login";
import { Signup } from "./Signup/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
} from "react-router-dom";
import LoginName from "./LoginName";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>

          <Route exact path="/Login">
            <Login />
          </Route>

          <Route exact path="/LoginUser">
            <LoginName />
          </Route>
      
        </Switch>
      </Router>
    </div>
  );
}

export default App;
