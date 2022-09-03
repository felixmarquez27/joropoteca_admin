import { DivRow } from "./style";
import React from "react";

const Row = ({w=100, 
    children,
    justifyContent='start',
    alignItems='center',
    margin='auto',
    padding=0

}) => {
    return ( 
        <DivRow 
        w={w} 
        justifyContent={justifyContent}
        alignItems={alignItems}
        margin={margin}
        padding={padding}

        >
            {children}
            </DivRow>
     );
}
 
export default Row;