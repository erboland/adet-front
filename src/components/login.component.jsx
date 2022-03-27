import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/3.png";
export default class Login extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <img src={logo} alt="logo" />
            <h3>Sign In</h3>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <Link to="/courses">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-main"
                style={{
                  background: "#080808",
                  border: "#080808",
                  color: "#83C18E",
                }}
                onClick={() => this.props.login(true)}
              >
                Submit
              </button>
            </Link>

            <p className="forgot-password text-right">
              Forgot <Link to="/">password?</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
