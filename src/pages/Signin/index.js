import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SigninArea } from './styled';
const Signin = ()=>{
    const dispatch = useDispatch();

    const newName = useSelector(state => state.user.name);
    const [ name,setName ] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault(); 
        dispatch({
            type:"USER_NAME",
            payload:{name:name}
        });
        
    }
    return (

        <SigninArea>
            <h3>Login</h3>
            <h4>Bem Vindo {newName}</h4>
            <form>
                <label>
                    Nome:
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Digite seu nome" />
                </label>
                <button onSubmit={handleSubmit}>ENVIAR</button>
            </form>
        </SigninArea>
    )
};

export default Signin;