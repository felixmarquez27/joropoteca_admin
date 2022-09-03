import styled from "styled-components";


const DivRow=styled.div`
    width:${props=>props.w}%;
    display:flex;
    flex-direction:row;
    justify-content:${props=>props.justifyContent};
    align-items:${props=>props.alignItems};
    margin:${props=>props.margin};
    padding:${props=>props.padding};
`

export {DivRow}