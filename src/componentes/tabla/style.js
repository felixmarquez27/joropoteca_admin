import styled from "styled-components";

const DivTable = styled.div`
    width: 100%;
    margin: auto;

`
const TableStyles = styled.table`
 border-collapse: collapse;
    margin: auto;
    font-size: 0.9em;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;

    thead tr {
    background-color: var(--primary);
    color: #ffffff;
    text-align: left;  
    }
    tbody tr{
        border-bottom: 1px solid #dddddd;
        :hover{
            background: var(--gris-fondo-btn);
            
        }
    }
    tbody tr:nth-child(even) {
    background-color: #f3f3f3;
    :hover{
            background: var(--gris-fondo-btn);
        }
    }
    tbody tr:last-of-type {
    border-bottom: 2px solid var(--primary);
    }
    th,td{
        text-transform: capitalize;
        padding: 12px 15px;
        div{
            width: 100%;
            display: flex;
            flex-direction:row;
            flex-wrap:nowrap;
            justify-content:space-around;
            align-items:center;
        }
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
    }
    tbody tr.active-row {
    font-weight: bold;
    color: var(--primary);
}

`


export {DivTable,TableStyles};

