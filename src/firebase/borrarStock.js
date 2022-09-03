import { db } from "./firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";



const borrarStock = async (id) => {
    return await deleteDoc(doc(db, "stock", id));
}

export default borrarStock;