import React from "react";
import SectionTemplate from "../SectionTemplate";
import BangTitle from "../BangTitle";
import { isBrowser } from "react-device-detect";
import "./PortfolioSection.css";
import ParticleAnimation from "../../ParticleAnimation/scripts/ParticleAnimation";

export default class MainHeader extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  // componentDidMount() {}

  componentDidMount() {
    this.child = document.querySelector(".animation-container");
    if (isBrowser && !this.Anim) {
      setTimeout(() => {
        this.Anim = new ParticleAnimation(this.child, [
          "./img/sample-01.png",
          "./img/sample-02.png",
          "./img/sample-03.png",
          "./img/sample-04.png",
          "./img/sample-05.png"
        ]);
        this.Anim.init();
      });
    }
  }

  render() {
    return (
      <SectionTemplate
        id="header"
        downSectionPath="#about"
        sectionStyle={{
          backgroundColor: "#131116",
          color: "white",
          height: "100vh"
        }}
        animation={true}
      >
        {isBrowser ? (
          <div
            className="animation-container"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <></>
        )}

        <BangTitle
          style={{ position: "absolute", bottom: "0", left: 0, right: 0 }}
        />
      </SectionTemplate>
    );
  }
}
