import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Results from "../components/Results";
function Routes() {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route
          exact
          path={["/search", "/images", "/news", "/videos ,", "/about"]}
        >
          <Results />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
