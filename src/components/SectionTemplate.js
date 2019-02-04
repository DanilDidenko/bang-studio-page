import React from "react";
import "./SectionTemplate.css";
import { connect } from "react-redux";
import { openMenu, closeMenu } from "../actions";
import { isBrowser } from "react-device-detect";

class SectionTemplate extends React.Component {
  handleScrollButton() {
    console.log("section template event");
    this.props.scrollSectionfromTemplate();
  }

  renderSelectionList() {
    if (this.props.sectionSelection === true) {
      return (
        <ul className="vert_menu">
          <li className="track m_1">01</li>
          <li className="track m_2">02</li>
          <li className="track m_3">03</li>
          <li className="track m_4">04</li>
        </ul>
      );
    } else {
      return <></>;
    }
  }

  render() {
    return (
      <>
        {isBrowser ? (
          <>
            <div style={column}>
              <div style={bang}>
                <img src="./img/svg/BANG.svg" />
              </div>
              {this.renderSelectionList()}
              <div style={bangStudio}>
                BANG <br />
                STUDIO
              </div>
            </div>
            <div style={content}>{this.props.children}</div>
            <div style={column}>
              <div onClick={this.props.openMenu}>MENU</div>
              <img
                style={arrow}
                onClick={this.handleScrollButton.bind(this)}
                src="./img/svg/arrow_dark.svg"
              />
            </div>
          </>
        ) : (
          <div style={mobileContainer}>
            <div style={menuRow}>
              <div style={bang}>
                <img src="./img/svg/BANG.svg" height="36px" />
              </div>
              <div onClick={this.props.openMenu}>MENU</div>
            </div>
            <div style={content}>{this.props.children}</div>
            <img
              className="arrow"
              style={arrow}
              onClick={this.handleScrollButton.bind(this)}
              src="./img/svg/arrow_dark.svg"
            />
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    popover: state.popover
  };
};
export default connect(
  mapStateToProps,
  { openMenu }
)(SectionTemplate);

const browserContainer = {
  width: "100%",
  height: "100%",
  display: "flex"
};

const mobileContainer = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column"
};

const column = {
  zIndex: 10,
  flexGrow: "0",
  display: "flex",
  width: "70px",
  justifyContent: "space-between",
  flexDirection: "column"
};

const content = {
  zIndex: 10,
  flexGrow: "1",
  position: "relative"
};

const bang = {
  zIndex: 10,
  fontSize: "36px"
};

const bangStudio = {
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "20px"
};

//mobile styles

const menuRow = {
  display: "flex",
  justifyContent: "space-between"
};

const arrow = {
  fill: "currentColor"
};
