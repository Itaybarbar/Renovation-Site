import React from 'react';
import { NavLink, HashRouter } from "react-router-dom";

class RenovationButton extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <button><NavLink style={{color: 'white'}} to="/StartRenovation">Click Here To Start Renovation</NavLink></button>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default RenovationButton;