import styled from 'styled-components';

export const HeaderArea = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:15%;
    background-color: #CCC;

    a{
        text-decoration:none;
    }

    .logo{
        margin-left:15px;
    }
    
    .menu{

        ul{
            list-style:none;
            display:flex;
            justify-content:space-between;


            a{
                margin-left:17px;
                margin-right:15px;

                &:hover{
                    color:red;
                    border-bottom:2px solid red;
                }
            }
        }
     }
`;