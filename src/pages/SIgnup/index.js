import React,{useState} from 'react';
import { useDispatch } from 'react-redux';

import { SignupArea } from './styled';
const Signup = ()=>{
    const dispatch = useDispatch();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const logged = true;

    const handleSubmit =(e)=>{
        e.preventDefault();
   
        if(name === ''){
            document.getElementById('1').style.display= 'block';
        }else{
            document.getElementById('1').style.display = 'none';
        }

        let reg = /\S+@\S+\.\S+/;
  
        if(!reg.test(email)){
            document.getElementById('2').style.display = 'block';
        }
        else{
            document.getElementById('2').style.display = 'none';
        }

        if(!password){
            document.getElementById('3').style.display = 'block';
        }else{
            document.getElementById('3').style.display = 'none';
        }

        if(confirmPassword !== password){
            document.getElementById('4').style.display = 'block'
        }else{
            document.getElementById('4').style.display = 'none';
        }

        if(name && password === confirmPassword && email !== ''){
            document.querySelector('.sucess').style.display = 'block';
            setName('');
            setPassword('')
            setEmail('');
            setConfirmPassword('');
            


            setTimeout(()=>{
                document.querySelector('.sucess').style.display = 'none';
                window.location.href = '/';
                
                dispatch({
                    type:"SET_LOGGED",
                    payload:{logged:logged}
                });
            },2000);
        }
        dispatch({
            type:'GET_EMAIL',
            payload:{email:email}
        });
        dispatch({
            type:"GET_PASSWORD",
            payload:{password:confirmPassword}
        });

       
    }

    return (
        <SignupArea>
            <h3> Cadastro</h3>

            <form onSubmit={handleSubmit}>
                <span className="sucess">Cadastro criado com Sucesso</span>
                <label>
                    Nome:
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} />
                    <span id="1">Campo Obrigatorio</span>
                </label>
                <label>
                    Email:
                    <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} />
                    <span id="2">Email Invalido</span>
                </label>
                <label>
                    Senha:
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <span id="3">Campo Obrigatorio</span>
                </label>
                <label>
                    Confirmar Senha:
                    <input type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} />
                    <span id="4">Senhas Diferentes</span>
                </label>
                <button>Cadastrar</button>
            </form>
        </SignupArea>
    )
};

export default Signup;