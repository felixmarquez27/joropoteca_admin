import styled from "styled-components";



const DivDatosCliente=styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    background: #e9ecef;
    padding:1em;
    border-radius:0.5em;
    
    h4{
        font-weight:600;
        margin:5px auto;
        color: var(--color-text)
    }

    p{
        margin-bottom:1px;
        margin-top:1px;

        span{
            font-weight:600;
            margin-right:0.5em
        }
    }


`

export {DivDatosCliente};