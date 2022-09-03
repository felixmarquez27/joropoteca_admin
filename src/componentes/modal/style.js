import styled from "styled-components";


const Overlay=styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: start;
    z-index:2;
    top: 0%;
    left: 0%;
    overflow-y:auto;

`


const DivModal=styled.div`

        width:${props=>props.tamano}%;
        background: #fff;
        border-radius: 15px;
        margin-top:3em;


`
const DivContentModal=styled.div`
    width: 95%;
    margin: auto;

`

const HeaderModal=styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
    margin-top: 1em;
    div{
        margin-left: 1em;
        font-weight: 600;
    }
    button{
        border: none;
        background: transparent;
        cursor:pointer;
        width: 30px;
        svg{
            width: 100%;
            height: 100%;
        }
    }
`

export {Overlay,DivModal, HeaderModal,DivContentModal}