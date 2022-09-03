import React,{ useState } from "react";
import { auth } from "../../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import CrearUsuariosBD from "../../../firebase/crearUsuarios";
import Form from "../../../componentes/form";
import Row from "../../../componentes/Row";
import Column from "../../../componentes/column";
import Button from "../../../componentes/button";
import Modal from "../../../componentes/modal";
import Alert from "../../../componentes/alert";
 



const ModalAgregarUsuarios = ({viewModal, setViewModal}) => {
    
    const [estadoAlert, setEstadoAlert] = useState(false);
    const [mensajeAlert, setMensajeAlert] = useState({});
    const [nombreUsuario, setNomrbeUsuario] = useState('');
    const [rolUsuario, setrolUsuario] = useState('normal');
    const [correo, setCorreo] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    



    const registrarUsuario=async(e)=>{
        e.preventDefault();
        
        const expresionRegular=/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(!expresionRegular.test(correo)){
            setEstadoAlert(true);
            setMensajeAlert({
                mensajeAlert:'Correo no válido',
                type:'error'
            })
            return;
        }
        if (nombreUsuario==='' || correo ==='' || pass1==='' || pass2==='') {
            setEstadoAlert(true);
            setMensajeAlert({
                mensajeAlert:'Por favor rellena todos los campos',
                type:'error'
            })
           
            return;
        }
        if(pass1!==pass2){
            setEstadoAlert(true);
            setMensajeAlert({
                mensajeAlert:'Las contraseñas no coinciden',
                type:'error'
            })
           
    
            return;
        }
       
        try {
            const infoUser=await createUserWithEmailAndPassword(auth, correo, pass1);
            
           CrearUsuariosBD({
                idUsuario:infoUser.user.uid,
                nombreUsuario:nombreUsuario,
                rolUsuario:rolUsuario,
                correo:correo
            });
            setEstadoAlert(true);
            setMensajeAlert({
                mensajeAlert:'El usuario se agregó correctamente',
                type:'success'
            })
            setViewModal(false);
            
        } catch (err) {
            setEstadoAlert(true);

           let mensaje;
            switch (err.code) {
                case "auth/weak-password":
                    mensaje="La contraseña debe tener al menos seis caracteres."
                    break;
                case "auth/email-already-in-use":
                    mensaje="Otro usuario ya está utilizando el correo electrónico proporcionado."
                    break;
                case "auth/invalid-email":
                    mensaje="correo inválido"
                    break;
            
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
        
        <Modal titulo={"Agregar nuevo usuario"} estadoModal={viewModal} cambiarEstado={setViewModal} tamano={40}>
        <Form onSubmit={registrarUsuario}>

            <Row>

                <Column w={90} margin={'auto'}>

                    <label>Nombre del Usuario</label>
                    <input 
                    type="text" 
                    placeholder="Nombre"
                    value={nombreUsuario}
                    onChange={(e)=>{setNomrbeUsuario(e.target.value)}}
                    ></input>

                    <label>Correo electrónico</label>
                    <input 
                    type="text" 
                    placeholder="Email"
                    value={correo}
                    onChange={(e)=>{setCorreo(e.target.value)}}
                    ></input>

                    <label>Contraseña</label>
                    <input 
                    type="password" 
                    placeholder="Contraseña"
                    value={pass1}
                    onChange={(e)=>{setPass1(e.target.value)}}
                    ></input>

                    <label>Repetir Contraseña</label>
                    <input 
                    type="password" 
                    placeholder="Repetir contraseña"
                    value={pass2}
                    onChange={(e)=>{setPass2(e.target.value)}}
                    ></input>

                    <label>Nivel de Usuario</label>
                    <select
                    value={rolUsuario}
                    onChange={(e)=>{setrolUsuario(e.target.value)}}
                    
                    >
                        <option value={'normal'}>Normal</option>
                        <option value={'administrador'}>Administrador</option>
                    </select>

                    <Button size={'smallBlock'} margin={'2em 0'}>Registrar</Button>
                </Column>


            </Row>

        </Form>
    </Modal>
    </>
     );
}
 
export default ModalAgregarUsuarios;