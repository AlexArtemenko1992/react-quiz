import React from "react";
import "./Drawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Quiz List", exact: true },
  { to: "/auth", label: "Authorization", exact: false },
  { to: "/quiz-creator", label: "Create new quiz", exact: false },
];

class Drawer extends React.Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks = () => {
    return links.map((link, i) => {
      return (
        <li className="link-wrapper" key={i}>
          <NavLink
            to={link.to}
            className="link-item"
            exact={link.exact}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  };

  render() {
    const cls = ["drawer"];
    if (!this.props.isOpen) {
      cls.push("close");
    }
    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
