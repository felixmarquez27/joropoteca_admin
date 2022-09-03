import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
const CrearUsuariosBD = ({idUsuario,nombreUsuario,rolUsuario="normal",correo, estado="activo"}) => {
 
        return addDoc(collection(db, "users"), {
            idUsuario:idUsuario,
            nombreUsuario:nombreUsuario,
            rolUsuario:rolUsuario,
            correo:correo,
            estado:estado
        });
        

}
 
export default CrearUsuariosBD;