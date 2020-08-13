import React, { useState } from "react";
import { SignInPageStyled } from "../login/login.component";
import BtnMain from "../btnMain/btnMain.component";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPasswordAsync } from "../../redux/reducers/user/user.actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const handleFormSubmit = (e) => {
  e.preventDefault();
};

const CreateAccount = ({ signUp, logStatus, userStatus }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (n, e) => {
    switch (n) {
      case 1:
        return setUsername(e.target.value);
      case 2:
        return setEmail(e.target.value);
      case 3:
        return setPassword(e.target.value);
      case 4:
        return setConfirmPassword(e.target.value);
      default:
        return;
    }
  };

  return userStatus ? (
    <Redirect to="/" />
  ) : (
    <SignInPageStyled>
      <div className="container">
        <p>Create Account using email and password </p>
        <form
          className="form"
          onSubmit={(e) => {
            handleFormSubmit(e);
            const data = {
              username,
              email,
              password,
            };
            if (password === confirmPassword) {
              signUp(data);
            } else {
              alert("Password and Confirm password not same");
            }
          }}
        >
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => handleInputChange(1, e)}
          />
          <label>username</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => handleInputChange(2, e)}
          />
          <label>email</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => handleInputChange(3, e)}
          />
          <label>password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => handleInputChange(4, e)}
          />
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

const mapStateToProps = (state) => {
  return {
    logStatus: state.user.isWorking,
    userStatus: state.user.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (data) => dispatch(createUserWithEmailAndPasswordAsync(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
