import React from "react";
import "./PortfolioCard.css";

export default class PortfolioCard extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  breakLine(text) {
    var br = React.createElement("br");
    var regex = /(<br \/>)/g;
    return text.split(regex).map(function(line, index) {
      return line.match(regex) ? <br key={"key_" + index} /> : line;
    });
  }

  render() {
    return (
      <div
        className={`portfolio-card ${this.props.className}`}
        style={{
          ...this.props.style,
          flexDirection: this.props.reverse ? "row-reverse" : "row"
        }}
      >
       
        <div className="portfolio-info-container">
        <h2 style={{ flexGrow: 0 }}>ПОРТФОЛИО</h2>
          <h2>{this.props.title}</h2>
          <div>{this.breakLine(this.props.description)}</div>
          <div className="more-button">
            <span>УЗНАТЬ БОЛЬШЕ</span>
          </div>
        </div>

        <div className="portfolio-img-container">
          <img className="portfolio-img" src={this.props.imgSrc} />
        </div>
      </div>
    );
  }
}
