import React from "react";
import SectionTemplate from "../SectionTemplate";
import { Fade } from "react-reveal";
import "./ContactsSection.css";
import { connect } from "react-redux";
import { openForm } from "../../actions";

class ContactsSection extends React.Component {
  state = {};

  render() {
    return (
      <SectionTemplate
        id="contacts"
        activeSection="#contacts"
        sectionSelection={true}
        sectionStyle={{
          backgroundColor: "#ffffff",
          color: "#131116",
          height: "100vh",
          width: "100vw"
        }}
        downSectionPath="/"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "50px 150px"
        }}
      >
        {" "}
        <Fade bottom>
          <div className="contacts-info">
            <h3 onClick={this.props.openForm.bind(this)} className="contact-us">
              СВЯЖИТЕСЬ С НАМИ
            </h3>
            <div className="contact-email">info@bang.studio</div>
            <div>
              <p className="contact-telegram">Telegram</p>
              <p className="contact-phone">+38(099)02-39-902</p>
            </div>
          </div>
          <div className="media">
            <a href="#">
              <img
                className="nav-icon"
                src="img/svg/linkedin.svg"
                alt="logo"
                width="auto"
                height="20px"
              />
            </a>
            <a href="#">
              <img
                className="nav-icon"
                src="img/svg/instagram.svg"
                alt="logo"
                width="auto"
                height="20px"
              />
            </a>
            <a href="#">
              <img
                className="nav-icon"
                src="img/svg/twitter.svg"
                alt="logo"
                width="auto"
                height="20px"
              />
            </a>
            <a href="#">
              <img
                className="nav-icon"
                src="img/svg/behance.svg"
                alt="logo"
                width="auto"
                height="20px"
              />
            </a>
          </div>{" "}
        </Fade>
      </SectionTemplate>
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
  { openForm }
)(ContactsSection);
