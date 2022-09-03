
import { BtnListStyle } from "./style";

const BtnList = ({onClick, children}) => {
    return ( 
        <BtnListStyle onClick={onClick}>{children}</BtnListStyle>
     );
}
 
export default BtnList;