import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import { useSelector,useDispatch } from 'react-redux';

const Header = ()=>{
    const logged = useSelector(state=>state.user.logged);
    const dispatch = useDispatch();

    const isLogged = ()=>{
        dispatch({
            type:'SET_LOGGED',
            payload:{logged:false}
        })
    }


    return (
        <HeaderArea>
            <div className="logo"><Link to="/">LOGOMARCA</Link></div>

            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">Sobre</Link></li>
                    <li><Link to="/Signup">Cadastro</Link></li>
                    <li><Link to="/Signin">Login</Link></li>
                    {logged && 
                        <li onClick={isLogged}>Sair</li>
                    }
                </ul>
            </div>
        </HeaderArea>
        
    )
};

export default Header;