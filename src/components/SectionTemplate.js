import React from "react";
import "./SectionTemplate.css";
import { connect } from "react-redux";
import { openMenu, closeMenu } from "../actions";
import { isBrowser } from "react-device-detect";
import { Link } from "react-router-dom";

class SectionTemplate extends React.Component {
  sections = ["", "#about", "#portfolio", "#contacts"];

  // handleScroll = page => {
  //   console.log(page - 1);
  //   this.props.history.push({
  //     pathname: this.sections[page - 1]
  //   });
  // };
  componentDidMount() {
    console.log(this.props.context);
  }

  renderSelectionList() {
    if (this.props.sectionSelection === true) {
      let list = this.sections.map((element, index) => {
        return (
          <Link
            to={{ pathname: "/", hash: element }}
            key={element}
            className={this.props.activeSection === element ? "active" : ""}
          >
            <li className={`track m_${index + 1}`}>{`0${index + 1}`}</li>
          </Link>
        );
      });

      return <ul className="vert_menu">{list}</ul>;
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
              <Link to={this.props.downSectionPath}>
                <img
                  className="arrow"
                  style={arrow}
                  src="./img/svg/arrow_dark.svg"
                />
              </Link>
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
            <Link to={this.props.downSectionPath}>
              <img
                className="arrow"
                style={arrow}
                src="./img/svg/arrow_dark.svg"
              />
            </Link>

            {/* <img
              className="arrow"
              style={arrow}
              src="./img/svg/arrow_dark.svg"
            /> */}
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
