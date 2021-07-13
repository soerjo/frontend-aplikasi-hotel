import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Login from "./page/Login";
import Register from "./page/Register";
import Dashboard2 from "./page/Dashboard2";
import { Reserve as CheckIn } from "./page/Reserve";
import { Room as CheckOut } from "./page/Room";
import Reports from "./page/Reports";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/checkin" component={CheckIn} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/" component={Dashboard2} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
