import { db } from "./firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";


const actualizarProveedor = async ({
    idDoc,
    nombre,
    correo,
    telefono,
    direccion,
    estado
}) => {
    const documento = doc(db, "proveedores", idDoc);

    return await updateDoc(documento, {
        nombre:nombre,
        correo:correo,
        telefono:telefono,
        direccion:direccion,
        estado:estado
    });
}

export default actualizarProveedor;