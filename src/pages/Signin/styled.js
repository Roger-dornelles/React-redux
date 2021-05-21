import styled from 'styled-components';

export const SigninArea = styled.div`
    height:80vh;
    width:40%;
    margin:0 auto;
    display:flex;
    justify-content:center;
    flex-direction:column;

        form{
            margin: 0 auto;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            width:100%;
            span{
                display:none;
                justify-content:center;
                width:106%;
                padding:5px 0;
                background-color: #ff5959;
                text-align:center;
                margin-top:5px;
                font-size:14px;
            }
            p{
                width: 106%;
                display: flex;
                margin: 0 auto;
               justify-content: center;
                background-color: #ffff77;
                padding: 5px 0;
            }

            label{
                display:flex;
                width:100%;
                flex-direction:column;
                margin-bottom:15px;

                input{
                    width:100%;
                    outline:none;
                    border-radius:9px;
                    padding:10px 12px;
                    font-size:16px;
                }
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