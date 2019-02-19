import React, { Component } from "react";
import "./BangTitle.css";

export default class BangTitle extends Component {
  render() {
    return (
      <div className="bang-title" style={this.props.style}>
        <img className="bang-title-image" src="img/svg/BANG_Studio.svg" alt="logo"  />
        <span>Мы создаем потрясающие сайты которые решают задачи клиентов</span>
      </div>
    );
  }
}


