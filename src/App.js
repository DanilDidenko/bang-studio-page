import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, Suspense, lazy } from "react";
// import PageTransition from 'react-router-page-transition';
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Portfolio from "./routes/Portfolio";
import PopoverMenu from "./components/PopoverMenu";
import { connect } from "react-redux";
import { openMenu, closePopover } from "./actions";



// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));
// const Contacts = lazy(() => import('./routes/Contacts'));
// const Portfolio = lazy(() => import('./routes/Portfolio'));

class App extends Component {
  render() {
    return (
      <Router>
        <>
          {this.props.popover.isOpen ? <PopoverMenu /> : <></>}
          <Switch>
            <Route exact path="/:section?" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contacts} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return state.popover;
};
export default connect(
  mapStateToProps,
  { openMenu, closePopover }
)(App);
