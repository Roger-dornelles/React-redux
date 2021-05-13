import styled from 'styled-components';

export const SigninArea = styled.div`
    height:80vh;
    width:50%;
    margin:0 auto;
    display:flex;
    justify-content:center;
    flex-direction:column;

   form{
       width:80%;

       input{
           width:100%;
           padding:12px;
           outline:none;
           border-radius:9px;
       }
       button{
           margin:0 auto;
           margin-top:20px;
           display:block;
           width:20%;
           padding:10px 12px;
           background-color:tomato;
           border:none;
           border-radius:7px;
           outline:none;
           cursor: pointer;
           color:white;
       }
   }


`;