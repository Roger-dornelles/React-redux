import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
const Header = ()=>{

    return (
        <HeaderArea>
            <div className="logo"><Link to="/">LOGOMARCA</Link></div>

            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">Sobre</Link></li>
                    <li><Link to="/Signin">Login</Link></li>
                </ul>
            </div>
        </HeaderArea>
        
    )
};

export default Header;