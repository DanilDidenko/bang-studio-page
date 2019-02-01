import React from "react";
import MainHeader from "../components/Home/MainHeader";
import AboutSection from "../components/Home/AboutSection";
import PortfolioSection from "../components/Home/PortfolioSection";
import PopoverMenu from "../components/PopoverMenu";
import ReactDOM from "react-dom";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ContactsSection from "../components/Home/ContactsSection";


export default class Home extends React.Component {
  state = { menuIsOpened: false };
  handleClick = () => {
    this.props.history.push({
      pathname: "/about"
    });
  };

  firstSection;

  componentDidMount(){
    //   this.firstSection=React.createRef();
    //   setTimeout(()=>{
    //       console.log(this.firstSection.keys())
    //     window.scroll(0, this.firstSection.offsetTop) 
    //   },2000)
      
  }
     
  
//   scrollToSection(id) {
//     console.log(ReactDOM.findDOMNode(this.refs.second));
//   }

//   componentDidMount() {
//     this.scrollToSection(1);
//   }

  render() {
    return (
      <div className="transition-item">
        <MainHeader anchor='1'/>
        <AboutSection   />
        <PortfolioSection ref="3" />
        <ContactsSection></ContactsSection>
        
      </div>
    );
  }
}
