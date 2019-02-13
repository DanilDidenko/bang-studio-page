import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, Suspense, lazy } from "react";
// import PageTransition from 'react-router-page-transition';
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import PopoverMenu from "./components/PopoverMenu";
import { connect } from "react-redux";
import { openMenu, closePopover } from "./actions";

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));
// const Contacts = lazy(() => import('./routes/Contacts'));
// const Portfolio = lazy(() => import('./routes/Portfolio'));

class App extends Component {
  handleScroll(e) {
    if (this.props.popover.isOpen) e.preventDefault();
  }
  render() {
    return (
      <Router>
        <div
          onWheel={this.handleScroll.bind(this)}
          className={
            "wrapper " + (this.props.popover.isOpen ? "scroll-lock" : "")
          }
        >
          {this.props.popover.isOpen ? <PopoverMenu /> : <></>}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
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
