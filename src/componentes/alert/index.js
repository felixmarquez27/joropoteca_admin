import { AlertStyles } from "./style";
import React, { useEffect } from "react";


const Alert = ({ mensajeAlert = 'Mensaje de prueba', type = "default", estadoAlert = false,setEstadoAlert }) => {

    useEffect(()=>{
        let tiempo;
        if (estadoAlert===true) {
            tiempo=setTimeout(()=>{
                setEstadoAlert(false)
            },4000);
        }
        return(()=>clearTimeout(tiempo));
    },[estadoAlert,setEstadoAlert])

    return (
        <>
            {estadoAlert &&
                <AlertStyles type={type} estadoAlert={estadoAlert}>
                    <p>{mensajeAlert}</p>
                </AlertStyles>
            }

        </>
    );
}

export default Alert;