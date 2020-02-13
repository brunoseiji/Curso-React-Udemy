import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Header extends Component {

    render() {
        return(
            <div >
                <div className="container-header">
                    <h1>Header</h1>
                    <nav>
                        <ul>
                            <li className="nav-item"><Link to="/">Home</Link></li>
                            <li className="nav-item"><Link to="/sobre">Sobre</Link></li>
                        </ul>
                    </nav>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Header;