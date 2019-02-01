import React from "react";
import "./PortfolioCard.css";

export default class PortfolioCard extends React.Component {
  render() {
    const card = {
      display: "flex",
      flexDirection: this.props.row === "reverse" ? "row-reverse" : "row"
    };
    return (
      <div
        className="porfolio-card"
        style={{
          ...this.props.style,
          flexDirection: this.props.reverse ? "row-reverse" : "row"
        }}
      >
        <div>
          <h2>{this.props.title}</h2>
          <div>{this.props.description}</div>
          <div className="more-btn">
            <span className="more-span">Узнать больше</span>
          </div>
        </div>

        <div>
          <img src="./img/10.jpg" />
        </div>
      </div>
    );
  }
}
