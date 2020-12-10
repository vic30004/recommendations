import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Recommendations from "./pages/Homepage/Recommendations/Recommendations";

function App({ client }) {
  return (
    <Router>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/recommendations' component={Recommendations} />
    </Router>
  );
}

export default App;
