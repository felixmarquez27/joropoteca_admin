import styled from "styled-components";

const VARIANT={
    primary:{
        background:"var(--primary)",
        hover:"var(--primaryHover)",
        color:"#fff"
    }
}
const SIZE={
    small:{
        fontSize:"0.8em",
        width:"auto"
    },
    smallBlock:{
        fontSize:"0.8em",
        width:"100%"
    },
    medium:{
        fontSize:"1em",
        width:"auto"
    },
    mediumBlock:{
        fontSize:"1em",
        width:"100%"
    },
}



const ButtonStyles=styled.button`
     cursor:pointer;
    border:none;
    padding: .7rem 1rem;
    font-weight: bold;
    border-radius: .25rem;
    position:relative;
    display: flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content:center;
    align-items: center;
    text-align:center;
    margin:${props=>props.margin};
    
    ${props=>{
        const customStyles=`
        font-size:${SIZE[props.size].fontSize};
        width:${SIZE[props.size].width};
        background:${VARIANT[props.variant].background};
        color:${VARIANT[props.variant].color};
       
        `
        return customStyles;
    }}

    :hover{
        background:${props=>`${VARIANT[props.variant].hover};`}
    }

    :active{
        transform:scale(0.97);
    }
    svg{
        margin-right:0.5em;
    }

`

export {ButtonStyles}