import React from "react";
import MainHeader from "../components/Home/MainHeader";
import AboutSection from "../components/Home/AboutSection";
import PortfolioSection from "../components/Home/PortfolioSection";
import ContactsSection from "../components/Home/ContactsSection";
import { isMobile } from "react-device-detect";

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
      if (
        window.pageYOffset >=
        this.scrollSctions[index].getBoundingClientRect().top
      ) {
      }
    });

    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));
    this.test(this.props.location);
    this.scubcription = this.props.history.listen((location, action) => {
      this.test(location);
    });
    window.addEventListener("keydown", e => {
      this.keyDownHandler(e);
    });
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
        this.currentSection = index;
      }
    });
  }

  handleResize(e) {
    if (window.innerHeight < 700 || window.innerWidth < 1100 || isMobile) {
      this.scrollAvalible = true;
    } else {
      if (this.scrollAvalible) {
        this.scrollAvalible = false;
      }
    }
    console.log(this.scrollAvalible);
    this.detectActiveSection();
    setTimeout(() => {
      this.scrollSctions[this.currentSection].scrollIntoView({
        block: "start"
      });
    });
  }

  MouseWheelHandler(e) {
    if (this.scrollAvalible) return;

    e.preventDefault();
    if (Math.abs(e.deltaY) != 0) {
      if (this.delay) return;
      var delta = e.deltaY;
      let scrollAllowed = false;

      if (delta > 0 && this.currentSection < this.scrollSctions.length - 1) {
        scrollAllowed = true;
        this.currentSection++;
      } else if (delta < 0 && this.currentSection > 0) {
        scrollAllowed = true;
        this.currentSection--;
      }

      if (scrollAllowed) {
        this.delay = true;

        window.scrollTo({
          top: this.scrollSctions[this.currentSection].offsetTop,
          behavior: "smooth"
        });

        window.onscroll = event => {
          if (
            this.scrollSctions[this.currentSection].getBoundingClientRect()
              .top === 0
          ) {
            setTimeout(() => {
              this.delay = false;
            }, 500);
            window.onscroll = null;
          }
        };
      }
    }
  }

  keyDownHandler(e) {
    if (e.key != "ArrowDown" && e.key != "ArrowUp") return;

    if (this.scrollAvalible) return;

    e.preventDefault();
    if (this.delay) return;
    let scrollAllowed = false;
    if (
      e.key === "ArrowDown" &&
      this.currentSection < this.scrollSctions.length - 1
    ) {
      scrollAllowed = true;
      this.currentSection++;
    } else if (e.key === "ArrowUp" && this.currentSection > 0) {
      scrollAllowed = true;
      this.currentSection--;
    }

    if (!scrollAllowed) return;
    this.delay = true;

    window.scrollTo({
      top: this.scrollSctions[this.currentSection].offsetTop,
      behavior: "smooth"
    });

    window.onscroll = event => {
      if (
        this.scrollSctions[this.currentSection].getBoundingClientRect().top ===
        0
      ) {
        setTimeout(() => {
          this.delay = false;
        });
        window.onscroll = null;
      }
    };
  }

  test(location) {
    let hashSection = this.sections.indexOf(location.hash.replace(/^#/, ""));
    if (hashSection < 0) return;
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
        });
        window.onscroll = null;
      }
    };
  }

  render() {
    return (
      <div
        className="transition-item"
        onWheel={this.MouseWheelHandler.bind(this)}
        tabIndex="0"
      >
        <MainHeader />
        <AboutSection />
        <PortfolioSection />
        <ContactsSection />
      </div>
    );
  }
}
