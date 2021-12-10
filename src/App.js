import React from "react";
import Landingpage from "./Components/LandingPage/LandingPage";
import secondPage from "./Components/secondPage/secondPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

const App = withRouter(({ location }) => {
  return (
    <div>
      <Switch>
        <Route path="/secondPage" component={secondPage} />
        <Route path="/" component={Landingpage} />
      </Switch>
    </div>
  );
});
export default App;
