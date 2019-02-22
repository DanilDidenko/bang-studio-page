import React from "react";
import SectionTemplate from "../SectionTemplate";
import "./AboutSection.css";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export default class AboutSection extends React.Component {
  state = {};

  render() {
    return (
      <SectionTemplate
        id="about"
        sectionSelection={true}
        sectionStyle={{
          backgroundColor: "#ffffff",
          color: "#131116",
          height: "100vh",
        }}
        downSectionPath="#portfolio"
        activeSection="#about"
      >
        <Fade left>
          <div className="about-content">
            <Link to={{ pathname: "/about" }}>
              <h2 className="about-title">О НАС</h2>
            </Link>

            <div right className="about-info">
              Веб студия BANG была основана в 2018 году двумя студентами ХНТУ
              которые любили веб разработку и ставили себе цель добиться
              совершенства в сфере разрабоотки веб сайтов. <br />
              Мы создаем веб сайты которые решают задачи клиентов здесь и
              сейчас.
            </div>
            <div className="more-button">
              <span>УЗНАТЬ БОЛЬШЕ</span>
            </div>
          </div>
        </Fade>
      </SectionTemplate>
    );
  }
}
