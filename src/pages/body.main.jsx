import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  BodyMain,
  Login,
  CreateAccount,
  AccountPage,
  Categorypage,
  ProductPage,
} from "./proxy";

const Body = () => {
  return (
    <Switch>
      <Route exact path="/">
        <BodyMain />
      </Route>
      <Route path="/category/:cat">
        <Categorypage />
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
      <Route path="/product/:pId">
        <ProductPage />
      </Route>
    </Switch>
  );
};

export default Body;
