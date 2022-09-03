import styled from "styled-components";


const DivDatosOrden=styled.div`
    width:100%;
    display: flex;
    flex-direction:column;
    margin-right:2em;
   

`
const SelectOrden=styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    h5{
        font-weight:600;
        margin-bottom:0em;
    }
    select{
        width: 100%;
        height: 30px;
    }
` 

export {DivDatosOrden,SelectOrden}