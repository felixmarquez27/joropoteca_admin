import BtnMenu from "../btnMenu";
import { DivTable, TableStyles } from "./style";
import { useState } from "react";
import AccionesTabla from "../accionesTabla";

const Table = ({ titulos, data, borrar = false,  }) => {
    const [viewPopOver,SetviewPopOver]=useState(false);
    
    
    return (
        <>
          { data.data.length>0 ?
            <DivTable>
                <TableStyles>
                
                    <thead>
                        <tr>
                            {titulos.map((titulo, indexTitulo, arrayTitulo) => {

                                return (
                                   
                                   
                                    <>

                                        {
                                            borrar && arrayTitulo.length -1 === indexTitulo
                                                ? <>
                                                    <th key={indexTitulo}>{titulo}</th>
                                                    <th key={indexTitulo+1}>Acciones </th>
                                                </>
                                                : <th key={indexTitulo+2}>{titulo} </th>
                                        }

                                    </>

                                )



                            })}
                        </tr>
                    </thead>
                    
                    <tbody>
                        {data.data.map((fila) => {
                           
                            return (



                                <tr key={fila[0]}>
                                    {fila.map((column, indexFila, arrayFila) => {
                                       
                                        return (
                                            <>

                                                {
                                                    borrar && arrayFila.length - 1 === indexFila
                                                        ? <>
                                                            <td key={indexFila+100}>{column} </td>
                                                            <td key={indexFila+101}><AccionesTabla onClickBorrar={()=>{}} onClickEditar={()=>{alert('editar')}}></AccionesTabla> </td>
                                                        </>
                                                        : <td key={indexFila+102}>{column} </td>


                                                }
                                               

                                            </>
                                        )

                                    })}

                                </tr>

                            )
                        })}


                    </tbody>
                   
                </TableStyles>
            </DivTable>
 :<></>}
        </>
    );
                    }

export default Table;