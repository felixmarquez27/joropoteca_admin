import styled from "styled-components";


const DivMenu=styled.div`
    width: 20%;
    position: absolute;
    left:10px;
    height: 100%;
    min-width: 200px;
    background: #fff;
    border-radius: 15px;
    padding: 1em;
   
`
const DivItemMenu=styled.div`
      width:100%;
      margin: auto;
      height: 50px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: start;
      align-items: center;
      padding: 0.3em;
      color: var(--color-text);
      font-weight: 600;
      transition-property: transform;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      
      cursor:pointer;
     
      svg{
          width: 15px;
          margin: auto 1em;
      }
      :hover{
          transform: translateX(5%);
      }
      :focus{
          color:var(--primary);
      }
`

export {DivMenu,DivItemMenu};