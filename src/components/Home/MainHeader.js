import React from "react";
import SectionTemplate from "../SectionTemplate";
import BangTitle from "../BangTitle";
import { isBrowser } from "react-device-detect";
import "./PortfolioSection.css";
import ParticleAnimation from "../../ParticleAnimation/scripts/ParticleAnimation";

export default class MainHeader extends React.Component {
  state = {};

  // componentDidMount() {}

  // startAnimation() {
  //   if (isBrowser && !this.Anim) {
  //     this.Anim = new ParticleAnimation();
  //     this.Anim.init();
  //   }
  // }

  // stopAnimation() {
  //   setTimeout(() => {
  //     this.Anim = null;
  //   });
  // }

  render() {
    return (
      <SectionTemplate
        downSectionPath="#about"
        style={{ backgroundColor: "#131116" }}
        animation={true}
      >
        {/* {isBrowser ? <div className="animation-container" style={{position:'absolute'}} /> : <></>} */}

        <BangTitle
          style={{ position: "absolute", bottom: "70px", left: 0, right: 0 }}
        />
      </SectionTemplate>
    );
  }
}
