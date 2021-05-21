import React,{ useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { SigninArea } from './styled';
const Signin = ()=>{
    const history = useHistory();
    const dispatch = useDispatch();

    const [ email,setEmail ] = useState('');
    const [password,setPassword]= useState('');
    const [ alert,setAlert ] = useState('');

    const newEmail = useSelector(state=>state.user.email);
    const newPassword = useSelector(state=>state.user.password);

    const handleSubmit = (event)=>{
        event.preventDefault(); 

        // validação simples dos campos input
        if(email !== newEmail) {
            document.getElementById('1').style.display = 'block';
        }else{
            document.getElementById('1').style.display = 'none';
        }

        if(password !== newPassword){
            document.getElementById('2').style.display = 'block';
        }else{
            document.getElementById('2').style.display = 'none';
        }

        // verificação dos dados armazenados e direcionando para a HOME 
        if(email === newEmail && password === newPassword){
            setAlert('Logado com Sucesso...');

            dispatch({
                type:"SET_LOGGED",
                payload: {logged: true}
            });

            setTimeout(()=>{
                history.replace('/');
            },1500);
        }else{
            setAlert('Campo Obrigatorio!!!');
        }
 
    }
    return (

        <SigninArea>
            <h3>Login</h3>            
            <h4>Bem Vindo</h4>
            <form onSubmit={handleSubmit}>
                
                {alert &&
                    <p>{alert}</p>
                }
                <label>
                    Email:
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Digite seu email" />
                    <span id='1'>Email Invalido</span>
                </label>
                <label>
                    Senha:
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Digite seu senha" />
                    <span id="2">Senha Invalida</span>
                </label>
                <button>ENVIAR</button>
            </form>
        </SigninArea>
    )
};

export default Signin;