import React from "react";
import "./PopoverMenu.css";
import { closePopover } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { isBrowser } from "react-device-detect";
import BangTitle from "./BangTitle";

class PopoverMenu extends React.Component {
  state = {
    shown: false
  };

  renderMenu() {
    return (
      <Fade top>
        <div className="option" onClick={this.props.closeMenu} style={select}>
          <Link to={"/about"} style={select}>
            {" "}
            О НАС
          </Link>
        </div>

        <div className="option" onClick={this.props.closeMenu} style={select}>
          <Link to={"/contact"} style={select}>
            {" "}
            КОНТАКТЫ
          </Link>
        </div>
        <div className="option" onClick={this.props.closeMenu} style={select}>
          <Link to={"/portfolio"} style={select}>
            {" "}
            ПОРТФОЛИО
          </Link>
        </div>
      </Fade>
    );
  }

  renderForm() {
    return (
      <Fade>
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </Fade>
    );
  }
  render() {
    const popover = {
      color: "black",
      position: "fixed",
      width: "100%",
      height: "100%",
      opacity: 0.8,
      backgroundColor: "#f3f3f3",
      zIndex: "30",
      left: 0,
      top: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: isBrowser ? "row" : "column"
    };

    return (
      <div style={popover}>
        <span className="close-btn" onClick={this.props.closePopover}>
          X
        </span>
        {this.props.popover.type === "menu"
          ? this.renderMenu()
          : this.renderForm()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.popover;
};
export default connect(
  mapStateToProps,
  { closePopover }
)(PopoverMenu);
const select = {
  margin: 0
};
