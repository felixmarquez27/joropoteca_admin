import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import {onAuthStateChanged } from "firebase/auth";


const contextSession= React.createContext();


const useAuth=()=>{
    return useContext(contextSession);
}

const ProviderSession = ({children}) => {
    const [user,setUser]=useState();
    const [cargando,setCargando]=useState(true);

    useEffect(()=>{
       const cancelarSuscripcion= onAuthStateChanged(auth,(user)=>{
             setUser(user);
             setCargando(false)
             return cancelarSuscripcion;
        })
    },[]);
    return ( 
        <contextSession.Provider value={{user:user}}>
            {!cargando && children}
        </contextSession.Provider>
     );
}
 
export {contextSession,ProviderSession, useAuth};