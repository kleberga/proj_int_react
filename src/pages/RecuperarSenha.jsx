
import Layout from "../Layout";
import React, {useEffect, useState} from 'react';
import { getAuth, sendPasswordResetEmail   } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import LoginImage from '../assets/images/login2.png';
import { useForm } from 'react-hook-form';

 
const RecuperarSenha = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [validation, setValidation] = useState("");
    const [removeValidation, setRemoveValidation] = useState(false);
    const [mensagemEnvio, setMensagemEnvio] = useState(false)
    const [mostrarEnvio, setMostrarEnvio] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setRemoveValidation(false);
          }, 4000);
    },[removeValidation])

    const triggerResetEmail = async (e) => {
        //e.preventDefault();
        const auth0 = getAuth();
        console.log(`email: ${email}`)

        try{
            await sendPasswordResetEmail(auth0, email).then(() => {
                console.log("Password reset link has been sent. Please check your mailbox");
                setMensagemEnvio("Um link para redefinição de senha foi enviado para o e-mail informado.");
                setMostrarEnvio(true)
                setTimeout(() => {
                    navigate('/login', {replace: true});
                }, 5300)
            })
        } catch (err){
            setValidation("Erro ao enviar o e-mail de redefinição de senha. Verifique o e-mail.");
            setRemoveValidation(true);
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

    return(
      <Layout children={
        <div className="gfg"> 
            <img id="imgBanner" src={LoginImage}></img>                               
            <div className="conteudoPaginas2">
                <h4 className="text_login"> Recuperar a senha: </h4>
                    <br/>                           
                    <form id='recuperar_senha' onSubmit={handleSubmit(triggerResetEmail)}>
                        <div className="box">
                            <div className="email_label">
                                <label htmlFor="email-address2" className="email_address">
                                        E-mail:
                                </label> 
                            </div>
                            <div className="input_email">
                            <input id="email-address2" className="input_boxes"{
                                        ...register("email", {
                                            required: "O campo E-mail é obrigatório",
                                            validate: {
                                                matchPattern: (v) =>
                                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "O campo E-mail é inválido"
                                            },
                                        }
                                        )}  onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                                        {errors.email?.message && (
                                            <div className="erros2"> {errors.email.message}</div>
                                        )} 
                            </div>
                            <br/>
                            <br/>
                            <div>
                                <Button className="botoes" as="input" variant="dark" type="submit" value="Enviar" id='recuperar_senha' />
                            </div>
                        </div>
                        <br/>
                            {removeValidation === true && <p className="erros2">{validation}</p>}
                            {mostrarEnvio === true && <p className="mensagem_envio2">{mensagemEnvio}</p>}
                    </form>
            </div>                             
        </div>
      } 
      />
    )
}
 
export default RecuperarSenha;