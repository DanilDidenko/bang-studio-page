import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, Suspense, lazy } from "react";
// import PageTransition from 'react-router-page-transition';
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Portfolio from "./routes/Portfolio"
import PopoverMenu from "./components/PopoverMenu";
import { connect } from "react-redux";
import { openMenu, closeMenu } from "./actions";

const supportsHistory = "pushState" in window.history;

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));
// const Contacts = lazy(() => import('./routes/Contacts'));
// const Portfolio = lazy(() => import('./routes/Portfolio'));

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      console.log(this.props);
    }, 1000);
  }
  render() {
    return (
      <Router>
        <>
          {this.props.isOpen ? <PopoverMenu /> : <></>}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contacts}/>
            <Route path="/portfolio" component={Portfolio}/>
          </Switch>
        </>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.menu.isOpen);
  return {
    isOpen: state.menu.isOpen
  };
};
export default connect(
  mapStateToProps,
  { openMenu, closeMenu }
)(App);
