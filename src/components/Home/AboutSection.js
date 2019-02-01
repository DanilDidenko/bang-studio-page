import React from "react";
import SectionTemplate from "../SectionTemplate";
import WavesAnimation from "../../WavesAnimation";
import {Fade} from 'react-reveal'

export default class AboutSection extends React.Component {
  state = {};
  render() {
    return (
      <section className="section section-fit">
        <SectionTemplate sectionSelection={true}>
          {/* <WavesAnimation></WavesAnimation> */}
          <div style={content}>
            <Fade left>
              <h2 style={header}>О НАС</h2>
            </Fade>
            <Fade right>

              <div className="info">
                Веб студия BANG была основана в 2018 году двумя студентами ХНТУ
                которые любили веб разработку и ставили себе цель добиться
                совершенства в сфере разрабоотки веб сайтов. Мы создаем веб
                сайты которые решают задачи клиентов здесь и сейчас.
              </div>
              
            </Fade>
          </div>
        </SectionTemplate>
      </section>
    );
  }
}

const content = {
  display: "flex",
  flexDirection: "column",
  height: "inherited",
  width: "inherited",
  alignItems: "center",
  height:'100%',
  justifyContent:'center'
};

const header = {
  fontSize: "30px",
  fontFamily: "Open Sans"
};
