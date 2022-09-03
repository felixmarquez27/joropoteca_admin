import Form from "../../../componentes/form";
import Row from "../../../componentes/Row";
import Column from "../../../componentes/column";
import Button from "../../../componentes/button";
import Modal from "../../../componentes/modal";
import Alert from "../../../componentes/alert";
import { useEffect, useState } from "react";
import useObtenerUsuarioPorId from "../../../hooks/useObtenerUsuariosPorId";
import actualizarUsuarios from "../../../firebase/actualizarUsuario";


const ModalEditarUsuarios = ({viewModalEditar, setViewModalEditar,idUsuarioEditar}) => {
  const [userById]=useObtenerUsuarioPorId(idUsuarioEditar);
  const [estadoAlert, setEstadoAlert] = useState(false);
  const [mensajeAlert, setMensajeAlert] = useState({});
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [rolUsuario, setrolUsuario] = useState('');
  const [estado, setEstado] = useState('');

useEffect(()=>{
 
  if(userById.length>0){
    setNombreUsuario(userById[1].nombreUsuario);
    setEstado(userById[1].estado);
    setrolUsuario(userById[1].rolUsuario);

  }
 
}, [userById]);


  const editarUsuario=async(e)=>{
    e.preventDefault();
    
  
    if (nombreUsuario==='' ) {
        setEstadoAlert(true);
        setMensajeAlert({
            mensajeAlert:'Por favor rellena todos los campos',
            type:'error'
        })
       
        return;
    }
   
    try {
       
        actualizarUsuarios({
                idDoc:userById[0],
                nombreUsuario:nombreUsuario,
                rolUsuario:rolUsuario,
                estado:estado
        })
        setEstadoAlert(true);
        setMensajeAlert({
            mensajeAlert:'El usuario se editó correctamente',
            type:'success'
        })
        setViewModalEditar(false);
        
    } catch (err) {
        setEstadoAlert(true);

       let mensaje;
        switch (err.code) {
            default:
                mensaje="Ocurrió un error"
                break;
        }
        setMensajeAlert({
            mensajeAlert:mensaje,
            type:'error'
        })
    }
}
    
    return ( 
      <>
        
      <Alert
          mensajeAlert={mensajeAlert.mensajeAlert}
          type={mensajeAlert.type}
          estadoAlert={estadoAlert}
          setEstadoAlert={setEstadoAlert}
          
          ></Alert>
      
      <Modal titulo={"Editar usuario"} estadoModal={viewModalEditar} cambiarEstado={setViewModalEditar} tamano={40}>
      <Form onSubmit={editarUsuario}>

          <Row>

              <Column w={90} margin={'auto'}>

                  <label>Nombre del Usuario</label>
                  <input 
                  type="text" 
                  placeholder="Nombre"
                  value={nombreUsuario || ''}
                  onChange={(e)=>{setNombreUsuario(e.target.value)}}
                  ></input>

                  <label>Estado</label>
                  <select
                  value={estado}
                  onChange={(e)=>{setEstado(e.target.value)}}
                  
                  >
                      <option value={'activo'}>Activo</option>
                      <option value={'inactivo'}>Inactivo</option>
                  </select>
                  <label>Nivel de Usuario</label>
                  <select
                  value={rolUsuario}
                  onChange={(e)=>{setrolUsuario(e.target.value)}}
                  
                  >
                      <option value={'normal'}>Normal</option>
                      <option value={'administrador'}>Administrador</option>
                  </select>

                  <Button size={'smallBlock'} margin={'2em 0'} >Aceptar</Button>
              </Column>


          </Row>

      </Form>
  </Modal>
  </>
     );
}
 
export default ModalEditarUsuarios;