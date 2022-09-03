import { FormStyle } from "./style";

const Form = ({children,onSubmit} ) => {
    return ( 
        <FormStyle onSubmit={onSubmit}>
           {children}
        </FormStyle>
     );
}
 
export default Form;