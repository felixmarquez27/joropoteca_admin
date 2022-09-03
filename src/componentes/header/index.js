
import { HeaderStyles } from "./style";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LogoSVG from '../logoSvg/index'
import React from "react";
const Header = () => {
    const navigate=useNavigate();

    const cerrarSesion=async()=>{
        try {
            await  signOut(auth);
            navigate('/');
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <HeaderStyles>
           <LogoSVG></LogoSVG>

            <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </HeaderStyles>
    );
}

export default Header;
