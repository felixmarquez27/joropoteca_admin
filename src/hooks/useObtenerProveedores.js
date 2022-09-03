import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, query  } from "firebase/firestore";




const useObtenerProveedores = () => {

    const [ proveedores, setStock]=useState([]);

    useEffect(()=>{
        const consulta=query(
            collection(db, 'proveedores')
        )
       
            const unsub = onSnapshot(consulta, (snapshot) => {
                    const dataSnapShot=snapshot.docs.map((proveedor)=>{
                       
                        return [
                        
                                proveedor.id,
                                proveedor.data().nombre,
                              proveedor.data().correo,
                               proveedor.data().telefono,
                            proveedor.data().direccion,
                            proveedor.data().estado,
                        ]
                    });
                    setStock(dataSnapShot) ;
            });
          
            
            return unsub;
           
    },[])
    return [proveedores];
}
 
export default useObtenerProveedores;