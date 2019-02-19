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
  firstSection;
  scrollings = [];
  scrollSctions = [];
  delay = false;

  componentDidMount() {
    this.sections.forEach((section, index) => {
      this.scrollSctions.push(document.getElementById(section));
      if (
        window.pageYOffset >=
        this.scrollSctions[index].getBoundingClientRect().top
      ) {
      }
    });
    console.log(this.sections);

    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));

    this.scubcription = this.props.history.listen((location, action) => {
      this.test();
    });
  }

  componentWillUnmount() {
    this.scubcription();
  }

  detectActiveSection() {
    let currentScrollOffset = window.innerHeight / 2;
    let currentWindow;
    // Scroll reach the target
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
        this.detectActiveSection();
        setTimeout(() => {
          this.scrollSctions[this.currentSection].scrollIntoView({
            block: "start"
          });
        });
      }
    }
  }

  MouseWheelHandler(e) {
    if (Math.abs(e.deltaY) != 0) {
      if (!this.scrollAvalible) {
        e.preventDefault();
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

          this.scrollSctions[this.currentSection].scrollIntoView({
            block: "start",
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
  }
  test() {
    let hashSection = this.sections.indexOf(
      this.props.location.hash.replace(/^#/, "")
    );
    console.log(hashSection);
    if (hashSection > 0) {
      console.log(this);
      setTimeout(() => {
        this.scrollSctions[hashSection].scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      });
    }
  }

  render() {
    return (
      <div
        className="transition-item"
        onWheel={this.MouseWheelHandler.bind(this)}
      >
        {/* <ReactPageScroller
          pageOnChange={page => {
            this.handleScroll(page);
          }}
          ref={c => (this.reactPageScroller = c)}
        >   </ReactPageScroller> */}
        <MainHeader />
        <AboutSection />
        <PortfolioSection />
        <ContactsSection />
      </div>
    );
  }
}
