import React, { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SectionTemplate from "../SectionTemplate";
import Fade from "react-reveal/Fade";
import PortfolioCard from "../PortfolioCard";

export default class PortfolioSection extends Component {
  state = {
    portfolioItems: [
      {
        title: "Lawyer office",
        description:
          "Корпоративынй сайт который был разработан для адвокатского фирмы в городе Херсон. При разработке сайта были учтены все пожелания клиента и использованы передовые технологии.",
        img1: "",
        img2: ""
      }
    ]
  };

  render() {
    return (
      <section className="section  section-fit">
        <SectionTemplate downSectionPath="/:contacts" sectionSelection={true} activeSection="/:portfolio">
          <div className="content" style={container}>
            <Fade left>
              <h2>ПОРТФОЛИО</h2>
            </Fade>
            <Fade right>
              <div style={{ width: "100%", height: "100%" }}>
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={125}
                  totalSlides={3}
                >
                  <Slider>
                    <Slide index={0}>I am the first Slide.</Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
                  </Slider>
                  <ButtonBack>Back</ButtonBack>
                  <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
              </div>
            </Fade>
          </div>
        </SectionTemplate>
      </section>
    );
  }
}

const container = {
  width: "100%",
  height: "100%",
  boxSizing: "border-box"
};
