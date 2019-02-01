import React from "react";
import "./PopoverMenu.css";
import { closeMenu } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import {

    isBrowser

  } from "react-device-detect";
import BangTitle from "./BangTitle";

class PopoverMenu extends React.Component {
  state = {
    shown: false
  };
  render() {
    const popover = {
      color: "black",
      position: "fixed",
      width: "100%",
      height: "100%",
      backgroundColor: "#f3f3f3",
      zIndex: "30",
      left: 0,
      top: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: isBrowser?'row':'column'
    };

    const select = {
      margin: 0
    };
    return (
      <div style={popover}>
      <span className="close-btn" onClick={this.props.closeMenu}>X</span>
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
        {isBrowser?(<BangTitle style={{position:'fixed',bottom:'30px',left:0, right:0}}></BangTitle>):<></>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.menu.isOpen
  };
};
export default connect(
  mapStateToProps,
  { closeMenu }
)(PopoverMenu);
