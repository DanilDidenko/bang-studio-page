import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SectionTemplate from "../SectionTemplate";
import Fade from "react-reveal/Fade";
import PortfolioCard from "../PortfolioCard";
import { connect } from "react-redux";

class PortfolioSection extends Component {
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

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <SectionTemplate
        id="portfolio"
        downSectionPath="#contacts"
        sectionSelection={true}
        activeSection="#portfolio"
        sectionStyle={{
          backgroundColor: "#f1f1f1",
          color: "#131116",
          height: "100vh",
        }}
      >
        <Fade left>
          <h2>ПОРТФОЛИО</h2>
        </Fade>

        <CarouselProvider
          style={{ width: "100%", height: "100%" }}
          totalSlides={3}
          naturalSlideWidth={100}
          naturalSlideHeight={100}
        >
          <Slider style={container}>
            <Slide index={0} style={{ backgroundColor: "red" }}>
              <PortfolioCard />
            </Slide>
            <Slide index={1}>
              <PortfolioCard />
            </Slide>
            <Slide index={2}>
              <PortfolioCard />
            </Slide>
          </Slider>
          <DotGroup />
        </CarouselProvider>
      </SectionTemplate>
    );
  }
}

const container = {
  boxSizing: "content-box",
  width: "100%",
  height: "100%",
  margin: "0 200px",

  boxSizing: "border-box"
};

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio
  };
};
export default connect(mapStateToProps)(PortfolioSection);
