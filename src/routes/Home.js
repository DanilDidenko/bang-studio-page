import React from "react";
import MainHeader from "../components/Home/MainHeader";
import AboutSection from "../components/Home/AboutSection";
import PortfolioSection from "../components/Home/PortfolioSection";
import ContactsSection from "../components/Home/ContactsSection";
import { isMobile } from "react-device-detect";
import Swipe from "react-easy-swipe";

export default class Home extends React.Component {
  sections = ["header", "about", "portfolio", "contacts"];

  constructor(props) {
    super(props);
  }

  currentSection;
  scrollAvalible = true;
  prevTime;
  scrollings = [];
  scrollSctions = [];
  delay = false;
  prevScrollTime;

  componentDidMount() {
    this.sections.forEach((section, index) => {
      this.scrollSctions.push(document.getElementById(section));
    });

    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));

    this.scubcription = this.props.history.listen((location, action) => {
      this.test(location);
    });
    this.test(this.props.location);
    window.addEventListener("keydown", e => {
      this.keyDownHandler(e);
    });

    window.addEventListener("wheel", e => {
      this.MouseWheelHandler(e);
    });

    console.log(this.currentSection);
  }

  componentWillUnmount() {
    this.scubcription();
  }

  detectActiveSection() {
    let currentScrollOffset = window.innerHeight / 2;
    this.scrollSctions.forEach((elem, index) => {
      if (
        currentScrollOffset < elem.getBoundingClientRect().bottom &&
        elem.getBoundingClientRect().top < currentScrollOffset
      ) {
        if (this.currentSection != index) {
          this.currentSection = index;
          this.props.history.push({
            pathname: "/",
            hash: "#" + this.sections[this.currentSection]
          });
        }
      }
    });
  }

  handleResize(e) {
    if (window.innerHeight < 700 || window.innerWidth < 1100) {
      this.scrollAvalible = true;
    } else {
      if (this.scrollAvalible) {
        this.scrollAvalible = false;
      }
    }
    this.detectActiveSection();
    setTimeout(() => {
      this.scrollSctions[this.currentSection].scrollIntoView({
        block: "start"
      });
    });
  }

  MouseWheelHandler(e) {
    if (this.scrollAvalible) {
      this.detectActiveSection();
      return;
    }

    e.preventDefault();
    if (this.delay) return;
    console.log("scroll");
    if (Math.abs(e.deltaY) === 0) return;

    var delta = e.deltaY;
    let scrollAllowed = false;
    let sectionToScroll;

    if (delta > 0 && this.currentSection < this.scrollSctions.length - 1) {
      scrollAllowed = true;
      sectionToScroll = this.currentSection + 1;
    } else if (delta < 0 && this.currentSection > 0) {
      scrollAllowed = true;
      sectionToScroll = this.currentSection - 1;
    }

    if (!scrollAllowed) return;
    if (sectionToScroll === this.currentSection) return;
    this.delay = true;
    this.props.history.push({
      pathname: "/",
      hash: "#" + this.sections[sectionToScroll]
    });
  }

  keyDownHandler(e) {
    if (e.key != "ArrowDown" && e.key != "ArrowUp") return;
    if (this.scrollAvalible) return;
    e.preventDefault();
    if (this.delay) return;
    console.log(1);
    let scrollAllowed = false;
    let sectionToScroll;
    if (
      e.key === "ArrowDown" &&
      this.currentSection < this.scrollSctions.length - 1
    ) {
      scrollAllowed = true;
      sectionToScroll = this.currentSection + 1;
    } else if (e.key === "ArrowUp" && this.currentSection > 0) {
      scrollAllowed = true;
      sectionToScroll = this.currentSection + -1;
    }

    if (!scrollAllowed) return;
    if (sectionToScroll === this.currentSection) return;

    this.props.history.push({
      pathname: "/",
      hash: "#" + this.sections[sectionToScroll]
    });
  }

  swipeHandler(type) {}

  test(location) {
    let hashSection = this.sections.indexOf(location.hash.replace(/^#/, ""));
    if (hashSection < 0) return;
    if (hashSection === this.currentSection) return;
    this.delay = true;
    setTimeout(() => {
      window.scrollTo({
        top: this.scrollSctions[hashSection].offsetTop,
        behavior: "smooth"
      });
      this.currentSection = hashSection;
    });
    window.onscroll = event => {
      if (
        this.scrollSctions[this.currentSection].getBoundingClientRect().top ===
        0
      ) {
        setTimeout(() => {
          this.delay = false;
        }, 500);
        window.onscroll = null;
      }
    };
  }

  render() {
    return (
      <Swipe onClick={e => console.log(e)} onSwipeUp={e => console.log(e)}>
        <MainHeader />
        <AboutSection />
        <PortfolioSection />
        <ContactsSection />
      </Swipe>
    );
  }
}
