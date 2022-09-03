import styled from "styled-components";


const BtnListStyle=styled.button`
    width: 95%;
    background: var(--gris-border-btn);
    border-radius: 5px;
    font-family: inherit;
    color: var(--color-text);
    padding: 10px 15px;
    border: none;
    margin: 3px auto;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 600;
    :hover{
        background: var(--gris);
        
    }

`



export {BtnListStyle}