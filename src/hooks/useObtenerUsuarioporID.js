import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import {doc, getDoc} from "firebase/firestore";

import { useNavigate } from "react-router-dom";

const useObtenerUsuarioporID  = (id) => {
    const [usuario, setUsuario]=useState('');
    const navigate=useNavigate();

    useEffect(()=>{
        const getUsuario=async()=>{
            const documento= await getDoc(doc(db,'users',id));
            if (documento.exists) {
                setUsuario(documento)
            } else {
                navigate('/usuarios');
            }
        }
        getUsuario()

    },[id,navigate])
    return [usuario];
}
 
export default useObtenerUsuarioporID ;