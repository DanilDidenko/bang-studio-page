import React from 'react';
import './NavItems.css'

export default class NavItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="nav-items">
                <span className="logo">Bang</span>
                <div className="menu-button">Menu</div>
                <span className="bang-string">BANG<br/>STUDIO</span>
                <span className="arrow">&#8592</span>
            </div>
        );
    }
}

