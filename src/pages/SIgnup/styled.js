import styled from 'styled-components';

export const SignupArea = styled.div`
    width:60%;
    height:80vh;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    h3{
        text-align:center;
    }
    form{
        width:100%;
        display:flex;
        height:auto;
        padding:35px 2%;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background-color:#ebe9e9;
        border-radius:10px;

        label{
            font-size:17px;
            width:60%;
            margin-bottom:15px;

            input{
                width:100%;
                padding:7px 12px;
                border-radius:7px;
                outline:0;
                border:2px;
                font-size:16px;
            }
            span{
                display:none;
               text-align:center;
                width:106%;
                margin-top:5px;
                font-size:14px;
                background-color:#ff4f4f;
                color:black;

            }
        }
        button{
            width:33%;
            padding:7px 12px;
            font-size:16px;
            color:white;
            background-color:#ff4242;
            border:0;
            border-radius:7px;
            margin-bottom:15px;
            cursor: pointer;
            text-align:center;

            &:hover {
                box-shadow:3px 2px 12px #ff4242;
                color:black;
            }
        }
        .sucess{
            width:100%;
            background-color:#66ff66;
            color:black;
            display:none;
            text-align:center;
            border-radius:7px;
            padding:5px 0;
            margin-bottom:12px;
        }
    }
`;