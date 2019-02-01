import React from 'react';

class Menu extends Component {
    state = {  }
    render() {
        return (
            <div className="menu">
                <span>Close</span>
                <ul>
                    <li>О нас</li>
                    <li>Портфолио</li>
                    <li>Контакты</li>
                </ul>
            </div>
        );
    }
}

export default Menu;
