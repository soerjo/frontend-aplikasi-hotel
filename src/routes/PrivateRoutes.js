import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

export const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.auth);
  // console.log("user dari routes: ", user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.email ? (
          <Component {...props} user={user} />
        ) : (
          <Redirect to="login" />
        )
      }
    ></Route>
  );
};
