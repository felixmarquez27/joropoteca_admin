import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, query  } from "firebase/firestore";




const useObtenerStock = () => {

    const [ stock, setStock]=useState([]);

    useEffect(()=>{
        const consulta=query(
            collection(db, 'stock')
        )
       
            const unsub = onSnapshot(consulta, (snapshot) => {
                    const dataSnapShot=snapshot.docs.map((stock)=>{
                       
                        return [
                        
                                stock.id,
                                stock.data().nombre,
                              stock.data().marca,
                               stock.data().tipo,
                            stock.data().unidad,
                              stock.data().cant,
                                stock.data().cantMin,
                                stock.data().idProveedor
                            
                             
                        ]
                    });
                    setStock(dataSnapShot) ;
            });
          
            
            return unsub;
           
    },[])
    return [stock];
}
 
export default useObtenerStock;