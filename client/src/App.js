import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Recommendations from "./pages/Recommendations/Recommendations";
import Items from "./pages/Items/Items";

function App({ client }) {
  return (
    <Router>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/recommendations' component={Recommendations} />
      <Route exact path='/:username/:recommendationId' component={Items} />
    </Router>
  );
}

export default App;
