import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import BtnMain from "../btnMain/btnMain.component";

export const SignInPageStyled = styled.div`
  width: 100%;
  height: 100%;

  & .container {
    max-width: 100rem;
    margin: 5rem auto;
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    color: ${(props) => props.theme.colorBlack};

    & p {
      font-size: 4rem;
      font-weight: 600;
      text-transform: capitalize;
      margin-bottom: 4rem;
    }

    & .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      & label {
        position: relative;
        z-index: 1;
        font-size: 2rem;
        text-transform: uppercase;
        transition: all 0.2s;
        text-align: left;
        width: 100%;
        padding-left: 1.5rem;
        transform: translateY(-2rem);
        visibility: hidden;
      }

      & input {
        position: relative;
        z-index: 2;
        font-size: 2rem;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 5px solid ${(props) => props.theme.colorBlack};
        margin-bottom: 0.5rem;
        width: 50rem;

        &::placeholder {
          text-transform: uppercase;
          transition: all 0.2s;
          color: ${(props) => props.theme.colorBlack};
          opacity: 0.5;
        }

        &:focus {
          &::placeholder {
            transform: translateY(+4rem);
          }

          & + label {
            visibility: visible;
            transform: translateY(0rem);
          }
        }
      }
    }

    & .options {
      margin-top: 5rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const loginSubmit = (e) => {
  e.preventDefault();
};

const Login = () => {
  const history = useHistory();
  return (
    <SignInPageStyled>
      <div className="container">
        <p>Login with email and password</p>
        <form className="form" onSubmit={(e) => loginSubmit(e)}>
          <input type="email" placeholder="Email" />
          <label htmlFor="email">Email</label>
          <input type="password" placeholder="password" />
          <label htmlFor="password">password</label>
          <BtnMain type="submit">Login</BtnMain>
        </form>
        <div className="options">
          <BtnMain>Sign In with google</BtnMain>
          <BtnMain
            onClick={() => {
              history.push("/create-account");
            }}
          >
            Create an account
          </BtnMain>
        </div>
      </div>
    </SignInPageStyled>
  );
};

export default Login;
