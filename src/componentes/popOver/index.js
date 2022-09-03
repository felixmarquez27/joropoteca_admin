import { DivPopOver } from "./style";


const PopOver = ({estadoPopOver}) => {
    return ( 
        <>
       { estadoPopOver &&
       <DivPopOver>
            <button>Editar</button>
            <button>Borrar</button>
        </DivPopOver>
        }
        
        </>
     );
}
 
export default PopOver;