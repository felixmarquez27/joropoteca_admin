import { db } from "./firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";


const actualizarStock = async ({
    idDoc,
    nombre,
    marca,
    tipo,
    unidad,
    cant,
    cantMin,
    idProveedor
}) => {
    const documento = doc(db, "stock", idDoc);

    return await updateDoc(documento, {
        nombre:nombre,
        marca:marca,
        tipo:tipo,
        unidad:unidad,
        cant:parseInt(cant, 10),
        cantMin:parseInt(cantMin, 10),
        idProveedor:idProveedor
    });
}

export default actualizarStock;