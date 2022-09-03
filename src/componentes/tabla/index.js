import { DivTable, TableStyles } from "./style";



const Tabla = ({ children }) => {
    
    return (
        <>
            
                <DivTable>
                    <TableStyles>
                        {children}
                    </TableStyles>
                </DivTable>
               
        </>
    );
}

export default Tabla;