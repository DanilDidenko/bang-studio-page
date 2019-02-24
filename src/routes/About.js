import React from "react";
import HomeAboutSection from "../components/About/HomeAboutSection";
import AboutStory from "../components/About/AboutStory";
import AboutTeamSection from "../components/About/AboutTeamSection";
import ContactsSection from "../components/Home/ContactsSection";

export default class About extends React.Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <HomeAboutSection />
        <AboutStory />
        <AboutTeamSection />
        <ContactsSection />
      </>
    );
  }
}
