import React from "react";
import "./SectionTemplate.css";
import { connect } from "react-redux";
import { openMenu } from "../actions";
import { isBrowser } from "react-device-detect";
import { Link } from "react-router-dom";

class SectionTemplate extends React.Component {
  sections = [
    { hash: "#header", name: "Bang studio" },
    { hash: "#about", name: "О нас" },
    { hash: "#portfolio", name: "Портфолио" },
    { hash: "#contacts", name: "Контакты" }
  ];

  state = {
    overedOption: null
  };

  handleMouseOver = index => {
    this.setState({
      ...this.state,
      overedOption: index
    });
  };

  renderSelectionList() {
    if (this.props.sectionSelection === true) {
      let list = this.sections.map((element, index) => {
        const active = this.props.id === element.hash.slice(1);
        return (
          <li
            className={`select-section ${
              active ? "select-section-active" : ""
            } ${
              this.state.overedOption === index && !active
                ? "overed-select-section"
                : ""
            } `}
            onMouseLeave={this.handleMouseOver.bind(this, null)}
            onMouseEnter={() => {
              this.handleMouseOver(index);
            }}
          >
            <Link
              to={{ pathname: "/", hash: element.hash }}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden"
              }}
              key={index}
            >
              <span
                className={`option-number ${active ? "active" : ""}`}
              >{`0${index + 1}`}</span>
              <span className="option-text">{element.name}</span>
            </Link>
          </li>
        );
      });

      return <ul className="section-select-menu">{list}</ul>;
    } else {
      return <></>;
    }
  }

  render() {
    return (
      <section
        id={this.props.id}
        style={this.props.sectionStyle}
        className="full-page-section"
      >
        <div className="nav-column left-nav-column">
          <img className="bang-logo" src="./img/svg/BANG.svg" />
          {this.renderSelectionList()}
          <div
            className="menu-button horizontal-menu-button"
            onClick={this.props.openMenu}
          >
            MENU
          </div>
          <div className="bang-text-botom">
            BANG <br />
            WEB STUDIO
          </div>
        </div>
        <div
          className="full-page-section-content"
          style={this.props.contentStyle}
        >
          {this.props.children}
        </div>
        <div className="nav-column right-nav-column">
          <div
            className="menu-button verical-menu-button"
            onClick={this.props.openMenu}
          >
            MENU
          </div>
          {this.props.downSectionPath ? (
            <Link className="arrow arrow-side" to={this.props.downSectionPath}>
              <img className="" src="./img/svg/arrow-light.svg" />
            </Link>
          ) : (
            <></>
          )}
        </div>
      </section>
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
