import { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Items from "./pages/Items/Items";
import UserState from "./context/User/UserState";
const Recommendations = lazy(() =>
  import("./pages/Recommendations/Recommendations")
);
const Profile = lazy(() => import("./pages/Profile/Profile"));

function App({ client }) {
  return (
    <Suspense fallback='loading...'>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <UserState>
            <Route exact path='/recommendations' component={Recommendations} />

            <Route
              exact
              path='/:recommendationId/:username'
              component={Items}
            />
            <Route exacth path='/:username' component={Profile} />
          </UserState>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
