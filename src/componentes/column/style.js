import styled from 'styled-components'


const DivColumn=styled.div`
    width:${props=>props.w}%;
    margin:${props=>props.margin};
    display: flex;
    flex-direction:column;
    position: relative;
`

export {DivColumn}