import React from "react";
import { SignInPageStyled } from "../login/login.component";
import BtnMain from "../btnMain/btnMain.component";
import { useHistory } from "react-router-dom";

const handleFormSubmit = (e) => {
  e.preventDefault();
};

const CreateAccount = () => {
  const history = useHistory();
  return (
    <SignInPageStyled>
      <div className="container">
        <p>Create Account using email and password </p>
        <form
          className="form"
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <input type="text" placeholder="username" />
          <label>username</label>
          <input type="email" placeholder="email" />
          <label>email</label>
          <input type="password" placeholder="password" />
          <label>password</label>
          <input type="password" placeholder="Confirm password" />
          <label>Confirm password</label>
          <BtnMain type="submit">Create Account</BtnMain>
        </form>
        <div className="options">
          <BtnMain>Create using gmail</BtnMain>
          <BtnMain
            onClick={() => {
              history.push("/login");
            }}
          >
            Already got an account?
          </BtnMain>
        </div>
      </div>
    </SignInPageStyled>
  );
};

export default CreateAccount;
