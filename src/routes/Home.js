import React from "react";
import MainHeader from "../components/Home/MainHeader";
import AboutSection from "../components/Home/AboutSection";
import PortfolioSection from "../components/Home/PortfolioSection";
import ReactPageScroller from "react-page-scroller";
import ContactsSection from "../components/Home/ContactsSection";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

export default class Home extends React.Component {
  sections = ["/", "#about", "#portfolio", "#contacts"];

  handleScroll = page => {
    this.props.history.push({
      pathname: this.sections[page - 1]
    });
  };

  firstSection;

  componentDidMount() {
    this.reactPageScroller.goToPage(
      this.sections.indexOf(this.props.location.hash)
    );

    this.props.history.listen((location, action) => {
      console.log(this.reactPageScroller);
      this.reactPageScroller.goToPage(this.sections.indexOf(location.hash));
    });
  }

  render() {
    return (
      <div className="transition-item">
        <ReactPageScroller
          pageOnChange={page => {
            this.handleScroll(page);
          }}
          ref={c => (this.reactPageScroller = c)}
        >
          <MainHeader />
          <AboutSection />
          <PortfolioSection />
          <ContactsSection />
        </ReactPageScroller>
      </div>
    );
  }
}
