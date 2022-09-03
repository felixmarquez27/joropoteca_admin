import { DivColumn } from "./style";


const Column = ({w=100, margin='auto',children}) => {
    return ( 
        <DivColumn w={w} margin={margin}>{children}</DivColumn>
     );
}
 
export default Column;