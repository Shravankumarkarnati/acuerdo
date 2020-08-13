import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  BodyMain,
  PlaceHolder,
  Login,
  CreateAccount,
  AccountPage,
} from "./proxy";

const Body = () => {
  return (
    <Switch>
      <Route exact path="/">
        <BodyMain />
      </Route>
      <Route path="/category/:cat">
        <PlaceHolder />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/create-account">
        <CreateAccount />
      </Route>
      <Route path="/account">
        <AccountPage />
      </Route>
    </Switch>
  );
};

export default Body;
