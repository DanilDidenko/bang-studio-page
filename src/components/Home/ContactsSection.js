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
        }}
        downSectionPath="/#header"
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
            <p className="contact-email">
              <a href="mailto:info@bang.studio">info@bang.studio</a>
            </p>
            <div>
              <p className="contact-telegram">
                <a href="tg://resolve?domain=380990239902">Telegram</a>
              </p>
              <p className="contact-phone">
                <a href="tel:+38(099)02-39-902">+38(099)02-39-902</a>
              </p>
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
