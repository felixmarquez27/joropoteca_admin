import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import {doc, getDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";



const useObtenerStockPorId = (id) => {
    const [stockById, setStockById]=useState([]);
    const navigate=useNavigate();
   
    useEffect(()=>{
        
        if (id!=='') {
            const stockPorId=async()=>{
                const documento= await getDoc(doc(db,'stock',id));
                if (documento.exists) {
                    setStockById(documento)
                } else {
                    navigate('/usuarios');
                }
                
            }
            stockPorId();
        } 
        },[id,navigate])
        
    return [stockById];
}
 
export default useObtenerStockPorId;