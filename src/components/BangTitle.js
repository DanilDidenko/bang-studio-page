import React, { Component } from "react";

export default class BangTitle extends Component {
  render() {
    return (
      <div style={{...container,...this.props.style}}>
        <img src="img/svg/BANG_Studio.svg" alt="logo" height="70px" />
        <span>Мы создаем потрясающие сайты которые решают задачи клиентов</span>
      </div>
    );
  }
}

const container = {
    display:'flex',
    flexDirection:'column',
    color:'white',
    textAlign: 'center',
    fontFamily: "Open Sans",
    fontWeight: '300',
    fontSize: '16px'
};
