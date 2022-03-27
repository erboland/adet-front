import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/3.png";
export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container nav-menu">
          <div>
            <div className="logo">
              <img src={logo} alt="logo" style={{ height: "3rem" }} />
            </div>
          </div>
          <Link
            className="navbar-brand navbar-color"
            to={"/sign-in"}
            style={{ color: "#d9deee", fontWeight: "bold" }}
            onClick={() => this.props.logOut()}
          >
            Adet
          </Link>
          {!this.props.logged ? (
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item hover-shadow">
                  <Link
                    className="nav-link navbar-color "
                    to={"/sign-in"}
                    style={{ color: "#d9deee" }}
                  >
                    Войти
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link navbar-color"
                    to={"/sign-up"}
                    style={{ color: "#d9deee" }}
                  >
                    Зарегистрироваться
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link navbar-color"
                    to={"/rating"}
                    style={{ color: "#d9deee" }}
                  >
                    Рейтинг учеников
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link navbar-color"
                    to={"/courses"}
                    style={{ color: "#d9deee" }}
                  >
                    Мои курсы
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link navbar-color"
                    to={"/new-course"}
                    style={{ color: "#d9deee" }}
                  >
                    Создать курс
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
  }
}
