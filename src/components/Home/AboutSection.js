import React from "react";
import SectionTemplate from "../SectionTemplate";
import "./AboutSection.css";
import { Fade } from "react-reveal";

export default class AboutSection extends React.Component {
  state = {};

  render() {
    return (
      <SectionTemplate
        id ='about'
        sectionSelection={true}
        sectionStyle={{ backgroundColor: "#ffffff", color:'#131116' ,  height: '100vh',
        width: '100vw'}}
        downSectionPath="#portfolio"
        activeSection="#about"
      >
        <div className="about-content">
          <Fade left>
            <h2 className="about-title">О НАС</h2>
          </Fade>
          <Fade right>
            <div className="about-info">
              Веб студия BANG была основана в 2018 году двумя студентами ХНТУ
              которые любили веб разработку и ставили себе цель добиться
              совершенства в сфере разрабоотки веб сайтов. Мы создаем веб сайты
              которые решают задачи клиентов здесь и сейчас.
            </div>
          </Fade>
          <div className="more-button">
            <span>Узнать больше</span>
          </div>
        </div>
      </SectionTemplate>
    );
  }
}
