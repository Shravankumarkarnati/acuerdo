import React from "react";
import "./page.styles.scss";
import { FaHeart, FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdAccountBox } from "react-icons/md";
import BtnMain from "../components/btnMain/btnMain.component";
import { connect } from "react-redux";
import { userLogout } from "../redux/reducers/user/user.actions";
import { Redirect } from "react-router-dom";

const AccountPage = ({ logOut, userStatus }) => {
  return userStatus ? (
    <div className="page">
      <div className="page-container">
        <div className="inner-div">
          <BtnMain>
            <p>Your Account</p>
            <MdAccountBox />
          </BtnMain>
          <BtnMain>
            <p>Your WishList</p>
            <FaHeart />
          </BtnMain>
          <BtnMain>
            <p>Your Cart</p>
            <FaShoppingCart />
          </BtnMain>
          <BtnMain>
            <p>Saved cards</p>
            <FaCreditCard />
          </BtnMain>
          <BtnMain onClick={logOut}>
            <p>LogOut</p>
            <FiLogOut />
          </BtnMain>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = (state) => {
  return {
    userStatus: state.user.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(userLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
