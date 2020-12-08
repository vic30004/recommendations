import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage}/>
    </Router>
  );
}

export default App;
