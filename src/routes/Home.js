import React from "react";
import MainHeader from "../components/Home/MainHeader";
import AboutSection from "../components/Home/AboutSection";
import PortfolioSection from "../components/Home/PortfolioSection";
import ReactPageScroller from "react-page-scroller";
import ContactsSection from "../components/Home/ContactsSection";

export default class Home extends React.Component {
  state = { menuIsOpened: false };
  handleClick = () => {
    this.props.history.push({
      pathname: "/about"
    });
  };

  firstSection;

  componentDidMount() {
    //   this.firstSection=React.createRef();
    //   setTimeout(()=>{
    //       console.log(this.firstSection.keys())
    //     window.scroll(0, this.firstSection.offsetTop)
    //   },2000)
  }

  currentSection = 1;

  //   scrollToSection(id) {
  //     console.log(ReactDOM.findDOMNode(this.refs.second));
  //   }

  //   componentDidMount() {
  //     this.scrollToSection(1);
  //   }
  goToPage = pageNumber => {
    this.reactPageScroller.goToPage(pageNumber);
  };

  scrollSection = anchor => {
    if (this.currentSection < 4) {
      this.currentSection++
      this.reactPageScroller.goToPage(+(anchor + 1));
    }else{
      console.log('end')
      this.currentSection =0;
      this.reactPageScroller.goToPage(+this.currentSection);
    }


  };

  render() {
    return (
      <div className="transition-item">
        <ReactPageScroller ref={c => (this.reactPageScroller = c)}>
          <MainHeader  scrollCallback={this.scrollSection} />
          <AboutSection  scrollCallback={this.scrollSection} />
          <PortfolioSection  scrollCallback={this.scrollSection} />
          <ContactsSection  scrollCallback={this.scrollSection} />
        </ReactPageScroller>
      </div>
    );
  }
}
