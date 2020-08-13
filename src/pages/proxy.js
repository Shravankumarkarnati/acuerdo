import React from "react";
import BodyMain from "../components/bodyMain/bodyMain.components";
import Login from "../components/login/login.component";
import CreateAccount from "../components/createAccount/createAccount.component";
import { useParams } from "react-router-dom";
import AccountPage from "./account.page";

const PlaceHolder = () => {
  const { cat } = useParams();
  return (
    <div style={{ textAlign: "center", padding: "10rem 0" }}>
      <h1>{cat} Page</h1>
    </div>
  );
};

export { BodyMain, PlaceHolder, Login, CreateAccount, AccountPage };
