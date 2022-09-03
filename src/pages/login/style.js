import styled from "styled-components";


const DivLogin=styled.div`
    width: 25%;
    margin: 5em auto;
    display: flex;
    flex-direction:column;
    min-width:250px;

    input{
    width:100%;
    height:38px;
    padding: .375rem .75rem;
    margin:5px 0px;
    box-sizing:border-box;
    border-radius: .25rem;
    border: 1px solid #ced4da;
    outline:none;

    :focus{
        border:2px solid var(--primary);
        
    }
    }


`

const DivLogo=styled.div`
    width: 40%;
    margin: 1em auto;

    svg{
        width: 100%;
    }

`


export {DivLogin,DivLogo}
