import React from "react";
import PortfolioBody from "../components/Portfolio/PortfolioBody";
import PortfolioHeader from "../components/Portfolio/PortfolioHeader";
import ContactsSection from "../components/Home/ContactsSection";

export default class Portfolio extends React.Component {
  state = {};
  render() {
    return (
      <>
        <PortfolioHeader />
        <PortfolioBody />
        <ContactsSection/>
      </>
    );
  }
}
