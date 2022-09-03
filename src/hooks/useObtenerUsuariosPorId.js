import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";




const useObtenerUsuarioPorId = (id) => {
    const [userById, setUserById]=useState([]);


    useEffect(()=>{

        const usuarioPorId=async()=>{
            const consulta=query(
                collection(db, 'users'),
                where('idUsuario', '==',id)
            )
            const querySnapshot = await getDocs(consulta);
            
            querySnapshot.forEach((doc) => {
                setUserById([doc.id,doc.data()]);
            });
            
        }
        usuarioPorId();
    },[id])
    return [userById];
}
 
export default useObtenerUsuarioPorId;