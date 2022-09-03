import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
const crearStock = ({
    nombre,
    marca,
    tipo="áridos",
    unidad="g",
    cant,
    cantMin,
    idProveedor}) => {
 
        return addDoc(collection(db, "stock"), {
            nombre:nombre,
            marca:marca,
            tipo:tipo,
            unidad:unidad,
            cant:cant,
            cantMin:cantMin,
            idProveedor:idProveedor
            
        });
        

}
 
export default crearStock;