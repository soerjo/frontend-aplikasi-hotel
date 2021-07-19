import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard2 from "../pages/Dashboard2";
import { Reserve as CheckIn } from "../pages/Reserve";
import { Room as CheckOut } from "../pages/Room";
import { Edit } from "../pages/Edit";
import Reports from "../pages/Reports";
import { PrivateRoutes } from "./PrivateRoutes";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoutes exact path="/checkin" component={CheckIn} />
        <PrivateRoutes path="/edit" component={Edit} />
        <PrivateRoutes path="/checkout" component={CheckOut} />
        <PrivateRoutes exact path="/reports" component={Reports} />
        <PrivateRoutes exact path="/" component={Dashboard2} />
      </Switch>
    </Router>
  );
}

export default Routes;
