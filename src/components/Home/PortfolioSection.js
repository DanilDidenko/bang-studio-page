import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SectionTemplate from "../SectionTemplate";
import Fade from "react-reveal/Fade";
import PortfolioCard from "../PortfolioCard";
import { connect } from "react-redux";

class PortfolioSection extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      activeSlide: Math.floor(this.props.portfolio.length / 2)
    });

    console.log(this.props.portfolio);
  }

  swipeSlider(type) {
    let slide = this.state.activeSlide;

    if (type === "+") {
      slide < this.props.portfolio.length - 1 ? slide++ : (slide = 0);
    } else if (type === "-") {
      slide > 0 ? slide-- : (slide = this.props.portfolio.length - 1);
    }
    this.setState({ activeSlide: slide });
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
          height: "100vh"
        }}
        contentStyle={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            flexGrow: 2,
            overflow: "hidden",
            position: "relative"
          }}
        >
          <div
            onClick={this.swipeSlider.bind(this, "-")}
            className="slider-button prev-button"
          />
          <div
            onClick={this.swipeSlider.bind(this, "+")}
            className="slider-button next-button"
          />
          {this.props.portfolio.map((elem, index) => {
            return (
              <PortfolioCard
                className={`slider-slide ${
                  this.state.activeSlide > index ? "previous-slide" : ""
                }
                ${this.state.activeSlide < index ? "next-slide" : ""} ${
                  this.state.activeSlide === index ? "current-slide" : ""
                }`}
                title={elem.header}
                description={elem.text}
                imgSrc={elem.img}
              />
            );
          })}
        </div>
        <div />
      </SectionTemplate>
    );
  }
}

const container = {
  // boxSizing: "content-box",
  // width: "100%",
  // height: "100%",
  // margin: "0 200px",
  // boxSizing: "border-box"
};

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio
  };
};
export default connect(mapStateToProps)(PortfolioSection);
