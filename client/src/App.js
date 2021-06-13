import { lazy, Suspense, useEffect } from "react";
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
        <UserState client={client}>
          <Switch>
            <Route
              exact
              path='/:recommendationId/:username'
              component={Items}
            />

            <Route exact path='/recommendations' component={Recommendations} />
            <Route exact path='/:username' component={Profile} />
          </Switch>
        </UserState>
        <Route exact path='/' component={Homepage} />
      </Router>
    </Suspense>
  );
}

export default App;
