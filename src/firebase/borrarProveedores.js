import { db } from "./firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";



const borrarProveedores = async (id) => {
    return await deleteDoc(doc(db, "proveedores", id));
}

export default borrarProveedores;