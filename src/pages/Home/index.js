import React from 'react';
import { HomeArea } from './styled';
import { useSelector } from 'react-redux';
const Home = ()=>{

        const Name = useSelector(state => state.user.name);
    return (
        <HomeArea>
            <h3>Pagina HOME</h3><br/><br/>
            Ola bem Vindo {Name}
        </HomeArea>
    )
};

export default Home;