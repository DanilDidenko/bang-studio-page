import React from "react";
import SectionTemplate from "../SectionTemplate";
import WavesAnimation from "../../WavesAnimation";

export default class AboutStory extends React.Component {
  state = {};
  render() {
    return (
      <section className="section">
        <SectionTemplate sectionSelection={true}>
          <div style={content}>
            <h2 style={header}>ИСТОРИЯ СОЗДАНИЯ СТУДИИ</h2>
            <div className="info">
              Веб студия BANG была основана в 2018 году двумя студентами ХНТУ
              которые любили веб разработку и ставили себе цель добиться
              совершенства в сфере разрабоотки веб сайтов. Мы создаем веб сайты
              которые решают задачи клиентов здесь и сейчас.
            </div>
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
  alignItems: "center"
};

const header = {
  fontSize: "30px",
  fontFamily: "Open Sans"
};
