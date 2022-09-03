import { ButtonStyles } from "./style";


const Button = ({size='small',variant='primary',margin='auto',children, onClick, }) => {
    return ( 
        <ButtonStyles size={size} variant={variant} onClick={onClick} margin={margin} >{children}</ButtonStyles>
     );
}
 
export default Button;