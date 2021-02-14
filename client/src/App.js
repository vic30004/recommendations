// import { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Recommendations from "./pages/Recommendations/Recommendations";
import Items from "./pages/Items/Items";
import UserState from "./context/User/UserState";
import Profile from "./pages/Profile/Profile";

function App({ client }) {
  return (
    <Router>
      <Route exact path='/' component={Homepage} />
      <UserState>
        <Route exact path='/recommendations' component={Recommendations} />
        <Route exact path='/:username/:recommendationId' component={Items} />
        <Route exacth path='/:username' component={Profile} />
      </UserState>
    </Router>
  );
}

export default App;
