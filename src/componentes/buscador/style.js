import styled from "styled-components";

const BuscadorStyle=styled.form`
    width: 100%;
`
const DivIput=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    input{
        width: 80%;
    height: 40px;
    border-radius: 0 5px 5px 0;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid var(--primary);
    }
    div{
        width: 20%;
        background: var(--primary);
        height: 40px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px 0 0 5px ;
    }

`



export {BuscadorStyle,DivIput}
