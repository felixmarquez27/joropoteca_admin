import styled from 'styled-components'
import { keyframes } from 'styled-components';

const TYPE={
    error:{
        background:"var(--danger)",
    },
    success:{
        background:"var(--success)",
        
    },
    default:{
        background:"#000",
        
    }
   
}
const slideDown=keyframes`
 0%{
     transform:translateY(-1.25rem);
     opacity:0;
 }
 10%{
     transform:translateY(1.25rem);
     opacity:1;
 }
 90%{
     transform:translateY(1.25rem);
     opacity:1;
 }
 100%{
     transform:translateY(1.25rem);
     opacity:0;
 }
`


const AlertStyles=styled.div`
    width:25% ;
    min-width: 150px;
    padding:1em 2em;
    position:fixed;
    top:1em;
    margin:auto;
    left:0;
    right:0;
    border-radius:20px;
    animation: ${slideDown} 4s ease forwards;
    z-index:2000;

    p{
        color:#fff;
        text-align:center;
    }

${props=>{
        const customStyles=`
        background:${TYPE[props.type].background};
        `
        return customStyles;
    }}

`



export {AlertStyles}