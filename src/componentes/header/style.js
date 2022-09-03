import styled from "styled-components";

const HeaderStyles=styled.header`

    width: 99%;
    margin: 10px auto;
    border-radius: 15px;
    height: 80px;
    
    background: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    svg{
        width: 65px;
        margin-left: 2em;
    }
    button{
    cursor:pointer;
    border:none;
    font-weight: bold;
    border-radius: .25rem;
    background: transparent;
    margin-right:2em;
    }
`
export {HeaderStyles};