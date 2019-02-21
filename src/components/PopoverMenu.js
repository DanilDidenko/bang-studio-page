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

  state = {
    name: "",
    company: "",
    email: "",
    pahone: "",
    formErrors: { email: "", phone: "" },
    emailValid: false,
    phoneValid: false,
    formValid: false
  };
  renderMenu() {
    return (
      <>
        <Link to={{ pathname: "/", hash: "#about" }} style={select}>
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
          <Link to={{ pathname: "/", hash: "#contacts" }} style={select}>
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

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;
    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "phone":
        phoneValid = value.match(
          /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
        );
        fieldValidationErrors.phone = phoneValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        phoneValid: phoneValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.phoneValid
    });
    console.log(this.state);
  }

  renderForm() {
    return (
      <form>
        <div className="form-col">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleChange.bind(this)}
            placeholder="Ваше имя.."
          />
          <input
            type="text"
            value={this.state.company}
            name="company"
            onChange={this.handleChange.bind(this)}
            placeholder="Ваша компания.."
          />
        </div>
        <div className="form-col">
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleChange.bind(this)}
            placeholder="Ваш email.."
          />
          <input
            type="text"
            value={this.state.phone}
            name="phone"
            onChange={this.handleChange.bind(this)}
            placeholder="Ваша телефон.."
          />
        </div>
        <div className="form-col">
          <textarea id="fmeassage" placeholder="Ваше сообщение.." />
        </div>
        <input type="submit" value="Submit" />
      </form>
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
