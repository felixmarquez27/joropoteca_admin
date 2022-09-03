import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, query  } from "firebase/firestore";




const useObtenerUsuarios = () => {
  
    
    const [usuarios, setUsuarios]=useState({
        data:[

           
        ]
    });

    useEffect(()=>{
        const consulta=query(
            collection(db, 'users')
        )
       
            const unsub = onSnapshot(consulta, (snapshot) => {
                    const dataSnapShot=snapshot.docs.map((usuario)=>{
                        return [usuario.data().idUsuario,usuario.data().nombreUsuario,usuario.data().correo,usuario.data().rolUsuario,usuario.data().estado]
                    });
                    setUsuarios({data:dataSnapShot}) ;
            });
          
            
            return unsub;
           
    },[])
    return [usuarios];
}
 
export default useObtenerUsuarios;