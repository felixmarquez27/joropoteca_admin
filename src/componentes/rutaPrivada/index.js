import { useAuth } from "../../context/contextSession";
import { Navigate } from "react-router-dom";

const RutaPrivada = ({children}) => {
   const {user}=useAuth();
   if (user) {
       return children;
   } else {
       return <Navigate replace to="/"/>
   }
}
 
export default RutaPrivada;