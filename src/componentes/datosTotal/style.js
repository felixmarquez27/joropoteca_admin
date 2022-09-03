import styled from "styled-components";


const DivTotales=styled.div` 
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content:end;
    margin-top:1em;
`
const ThumbItemTotal=styled.div`
    width: 90%;
    text-align:right;
    display: flex;
    flex-direction:column;
    justify-content:end;
    align-items:end;
    margin-bottom:1em;
    
    p{
        margin-top:0;
        margin-bottom:0;
        font-size:1.5em;
    }
    input{
        width: 50%;
        height:20px;
        text-align:right;
        padding:5px;
        font-size:1.2em;
    }
    label{
        font-weight:600;
    }
    h5{
        margin-top:0px;
        margin-bottom:0px;
        font-size:1.2em;
    }
`


export {DivTotales,ThumbItemTotal}