import Button from '../../componentes/button/index'
import { useState } from 'react';
import { DivLogin, DivLogo } from "./style";
import Alert from '../../componentes/alert';
import { auth } from '../../firebase/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import LogoSVG from '../../componentes/logoSvg';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');
    const [estadoAlert, setEstadoAlert] = useState(false);
    const [mensajeAlert, setMensajeAlert] = useState({});

    const inicioSesion = async (e) => {
        e.preventDefault();

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(correo)) {
            setEstadoAlert(true);
            setMensajeAlert({
                mensajeAlert: 'Correo no válido',
                type: 'error'
            })
            return;
        }
        if (correo === '' || pass === '') {
            setEstadoAlert(true);
            setMensajeAlert({
                mensajeAlert: 'Por favor rellena todos los campos',
                type: 'error'
            })

            return;
        }

        try {
            await signInWithEmailAndPassword(auth, correo, pass);
            navigate('/usuarios');

        } catch (err) {
            setEstadoAlert(true);

            let mensaje;
            switch (err.code) {
                case "auth/weak-password":
                    mensaje = "La contraseña debe tener al menos seis caracteres."
                    break;
                case "auth/wrong-password":
                    mensaje = "Contraseña Inválida"
                    break;
                case "auth/user-not-found":
                    mensaje = "No existe Usuario"
                    break;
                case "auth/invalid-email":
                    mensaje = "correo inválido"
                    break;
                default:
                    mensaje = "Ocurrió un error"
                    break;
            }
            setMensajeAlert({
                mensajeAlert: mensaje,
                type: 'error'
            })
        }

    }
    return (
        <DivLogin>
            <Alert
                mensajeAlert={mensajeAlert.mensajeAlert}
                type={mensajeAlert.type}
                estadoAlert={estadoAlert}
                setEstadoAlert={setEstadoAlert}

            ></Alert>
            <DivLogo>
            <LogoSVG></LogoSVG>

            </DivLogo>
            <form onSubmit={inicioSesion}>
                <input type="text"
                    placeholder="Correo"
                    value={correo}
                    onChange={(e) => { setCorreo(e.target.value) }}
                ></input>
                <input type="password"
                    placeholder="Contraseña"
                    value={pass}
                    onChange={(e) => { setPass(e.target.value) }}
                ></input>
                <Button type="submit" size={'mediumBlock'}>Iniciar Sesión</Button>

            </form>
        </DivLogin>
    );
}

export default Login;