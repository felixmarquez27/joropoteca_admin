import styled from "styled-components";


const DivAccionesTabla=styled.div`

    width: 100%;
    display: flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content:space-around;
    align-items:center;

    button{
        width: 30px;
        height: 30px;
        padding:0.2em;
        background:transparent;
        color:var(--primary);
        border:1px solid var(--primary);
        border-radius:5px;
        cursor:pointer;
        :hover{
            background: var(--primary);
            color:#fff;
            
        }
        svg{
            width: 60%;
        }
    }

`

export {DivAccionesTabla}