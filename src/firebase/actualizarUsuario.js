import { db } from "./firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";


const actualizarUsuarios = async ({ idDoc, nombreUsuario, rolUsuario, estado }) => {
    const documento = doc(db, "users", idDoc);

    return await updateDoc(documento, {
        nombreUsuario: nombreUsuario,
        rolUsuario: rolUsuario,
        estado: estado
    });
}

export default actualizarUsuarios;