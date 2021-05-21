import styled from 'styled-components';

export const HeaderArea = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:15%;
    background-color: #CCC;

    a{
        text-decoration:none;
        color:black;
    }

    .logo{
        margin-left:15px;
    }
    
    .menu{

        ul{
            list-style:none;
            display:flex;
            justify-content:space-between;

            li{
                margin-right:15px;
                cursor:pointer;
            }

            a{
                margin-left:5px;
                margin-right:7px;

                &:hover{
                    color:red;
                    border-bottom:2px solid red;
                }
            }
        }
     }
`;