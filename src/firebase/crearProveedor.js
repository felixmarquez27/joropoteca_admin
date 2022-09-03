import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
const crearProveedor = ({
    nombre,
    correo,
    telefono,
    direccion,
    estado}) => {
 
        return addDoc(collection(db, "proveedores"), {
            nombre:nombre,
            correo:correo,
            telefono:telefono,
            direccion:direccion,
            estado:estado
        });
        

}
 
export default crearProveedor;