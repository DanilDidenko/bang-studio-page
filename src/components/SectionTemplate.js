import React from "react";
import "./SectionTemplate.css";
import { connect } from "react-redux";
import { openMenu } from "../actions";
import { isBrowser } from "react-device-detect";
import { Link } from "react-router-dom";

class SectionTemplate extends React.Component {
  sections = [
    { hash: "", name: "Bang studio" },
    { hash: "#about", name: "Портфолио" },
    { hash: "#portfolio", name: "Портфолио" },
    { hash: "#contact", name: "Контакты" }
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
        return (
          <Link
            to={{ pathname: "/", hash: element.hash }}
            key={index}
            className={
              this.props.activeSection === element.hash
                ? `active selection-option`
                : `selection-option`
            }
          >
            <li
              onMouseEnter={this.handleMouseOver.bind(this, index)}
              onMouseLeave={this.handleMouseOver.bind(this, null)}
              className={`track m_${index + 1}`}
            >
              <span className="option-number">{`0${index + 1}`}</span>
              <span className="option-text">{element.name}</span>
            </li>
          </Link>
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
          <div onClick={this.props.openMenu}>MENU</div>
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
