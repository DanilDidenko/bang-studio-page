import React from "react";
import SectionTemplate from "../SectionTemplate";
import { Fade } from "react-reveal";

export default class ContactsSection extends React.Component {
  state = {};
  scrollSectionfromTemplate = () => {
    this.props.scrollCallback(3);
  };
  render() {
    return (
      <Fade bottom>
        <section className="section  section-fit">
          <SectionTemplate sectionSelection={true} scrollSectionfromTemplate={this.scrollSectionfromTemplate}>
            <div style={container}>
              <h3>Свяжитесь с нами</h3>
              <div>info@bang.studio</div>
              <div>
                <p>Telegram</p>
                <p>+38(099)02-39-902</p>
              </div>
              <div className="media">
                <a href="#">
                  <img
                    id="in"
                    src="img/svg/linkedin.svg"
                    alt="logo"
                    width="auto"
                    height="20px"
                  />
                </a>
                <a href="#">
                  <img
                    id="inst"
                    src="img/svg/instagram.svg"
                    alt="logo"
                    width="auto"
                    height="20px"
                  />
                </a>
                <a href="#">
                  <img
                    id="tw"
                    src="img/svg/twitter.svg"
                    alt="logo"
                    width="auto"
                    height="20px"
                  />
                </a>
                <a href="#">
                  <img
                    id="be"
                    src="img/svg/behance.svg"
                    alt="logo"
                    width="auto"
                    height="20px"
                  />
                </a>
              </div>
            </div>
          </SectionTemplate>
        </section>
      </Fade>
    );
  }
}

const container = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between"
};

const content = {
  display: "flex",
  flexDirection: "column",
  height: "inherited",
  width: "inherited",
  alignItems: "center"
};

const header = {
  fontSize: "30px",
  fontFamily: "Open Sans"
};
