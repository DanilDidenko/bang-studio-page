import React from 'react';
import './ButtonHover.css'

class ButtonHover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style ={this.props.style} className={`btn from-${this.props.from ? this.props.from : 'top'}`}>{this.props.children}</div>
        );
    }
}

export default ButtonHover;