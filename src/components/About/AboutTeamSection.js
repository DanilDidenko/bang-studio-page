import React from "react";
import SectionTemplate from "../SectionTemplate";


export default class AboutTeamSection extends React.Component {
  state = {};
  render() {
    return (
      <section className="section">
        {/* <WavesAnimation></WavesAnimation> */}
        <div style={content}>
          <h2 style={header}>НАША КОМАНДА</h2>
        </div>
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
