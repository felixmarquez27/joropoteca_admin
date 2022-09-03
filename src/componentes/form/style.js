import styled from "styled-components";


const FormStyle = styled.form`

width: 100%;


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
    select{
        width: 100%;
        height: 30px;
        margin:5px 0px;
    }
    hr{
        width: 100%;
        margin: 2em auto;
        height: 1px;
        background: var(--gris-border-btn);
        border: none;
    }
    h5{
        margin-top:0.5em;
    }

`

export { FormStyle };