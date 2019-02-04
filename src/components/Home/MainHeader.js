import React from "react";
import SectionTemplate from "../SectionTemplate";
import CircleAnimation from "../../CircleAnimation";
import BangTitle from "../BangTitle";
import { isBrowser } from "react-device-detect";

export default class MainHeader extends React.Component {
  state = {};

  scrollSectionfromTemplate = () =>{
    this.props.scrollCallback(0)
  }

  render() {
    return (
      <header className="section  section-fit" style={header}>
        {isBrowser ? (
          <CircleAnimation
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom:0,
              margin: "auto"
            }}
          />
        ) : (
          <></>
        )}
        <SectionTemplate scrollSectionfromTemplate={this.scrollSectionfromTemplate}>
          <div style={isBrowser ? browserContainer : mobileContainer}>
            <BangTitle />
          </div>
        </SectionTemplate>
      </header>
    );
  }
}

const browserContainer = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  textAlign: "center"
};

const mobileContainer = {
  width: "100%",
  height: "100%",
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  justifyContent: "center"
};

const header = {
  color: "white",
  backgroundColor: "#131116"
};
