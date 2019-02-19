import React from "react";
import "./PopoverMenu.css";
import { closePopover } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { isBrowser } from "react-device-detect";
import { throws } from "assert";

class PopoverMenu extends React.Component {
  handleClick = () => {
    this.props.history.push({
      pathname: "/about"
    });
  };
  renderMenu() {
    return (
      <>
        <Link to={{ pathname: "/about" }} style={select}>
          <div
            className="option"
            onClick={this.props.closePopover}
            style={select}
          >
            <span style={select}> О НАС</span>
          </div>
        </Link>
        <div
          className="option"
          onClick={this.props.closePopover}
          style={select}
        >
          <Link to={"/contact"} style={select}>
            КОНТАКТЫ
          </Link>
        </div>
        <div
          className="option"
          onClick={this.props.closePopover}
          style={select}
        >
          <Link to={{ pathname: "/", hash: "#portfolio" }} style={select}>
            ПОРТФОЛИО
          </Link>
        </div>
      </>
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
    return (
      <div
        className={
          "popover " +
          (this.props.popover.isOpen ? "popover-visible" : "popover-hidden")
        }
      >
        <span className="close-btn" onClick={this.props.closePopover}>
          ×{" "}
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
