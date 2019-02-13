import React from "react";
import SectionTemplate from "../SectionTemplate";
import { Fade } from "react-reveal";
import "./ContactsSection.css";

export default class ContactsSection extends React.Component {
  state = {};

  render() {
    return (
      <Fade bottom>
        <SectionTemplate
          activeSection="#contacts"
          sectionSelection={true}
          downSectionPath="/"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px 150px"
          }}
        >
          <div className="contacts-info">
            <h3 className="contact-us">СВЯЖИТЕСЬ С НАМИ</h3>
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
          </div>
        </SectionTemplate>
      </Fade>
    );
  }
}
