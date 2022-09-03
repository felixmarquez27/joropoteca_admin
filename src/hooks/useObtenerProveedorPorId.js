import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import {doc, getDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";



const useObtenerProveedoresPorId = (id) => {
    const [proveedorById, setProveedorById]=useState([]);
    const navigate=useNavigate();
   
    useEffect(()=>{
        
        if (id!=='') {
            const proveedorPorId=async()=>{
                const documento= await getDoc(doc(db,'proveedores',id));
                if (documento.exists) {
                    setProveedorById(documento)
                } else {
                    navigate('/proveedores');
                }
                
            }
            proveedorPorId();
        } 
        },[id,navigate])
        
    return [proveedorById];
}
 
export default useObtenerProveedoresPorId;