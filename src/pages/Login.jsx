
import Layout from "../Layout";
import React, {useEffect, useState} from 'react';
import { signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from "../infra/firebase";
import { NavLink, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import LoginImage from '../assets/images/login2.png';

 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState("");
    const [removeValidation, setRemoveValidation] = useState(false);
    
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/login_entrada")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            if (errorCode == "auth/invalid-credential") {
                setValidation("O e-mail não está cadastrado.");
                setRemoveValidation(true);
              } else if (error.code == "auth/missing-password") {
                setValidation("Informe a senha.");
                setRemoveValidation(true);
              } else if (error.code == "auth/invalid-email") {
                setValidation("Informe um e-mail válido.");
                setRemoveValidation(true);
              }
            console.log(validation);
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setRemoveValidation(false);
          }, 4000);
    },[removeValidation])

    return(
      <Layout children={
        <div className="gfg"> 
            <img id="imgBanner" src={LoginImage}></img>                               
            <div className="conteudoPaginas2">
                <h4 className="text_login"> Efetuar login: </h4>
                    <br/>                           
                    <form>
                        <div className="box">
                            <div className="email_label">
                                <label htmlFor="email-address" className="email_address">
                                        E-mail:
                                </label> 
                            </div>
                            <div className="input_email">
                                <input
                                    id="email-address"
                                    className="input_boxes"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="E-mail"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <br/>
                            <br/>
                            <div className="senha_label">
                                <label htmlFor="senha" className="senha">
                                    Senha:
                                </label>
                            </div>
                            <div className="input_senha">
                                <input
                                    id="senha"
                                    className="input_boxes"
                                    name="senha"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Senha"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <br/>
                            <br/>
                            <div>
                                <Button className="botoes" as="input" variant="dark" type="submit" value="Enviar" onClick={onLogin} />{''}
                            </div>
                        </div>
                        <br/>
                            {removeValidation === true && <p className="erros2">{validation}</p>}
                        </form>
                        <p className="text-sm text-black text-left">
                            <NavLink to="/recup_senha">
                                Esqueceu a senha?
                            </NavLink>
                        </p>
                        <p className="text-sm text-black text-left">
                            Ainda não tem conta? {' '}
                            <NavLink to="/registro">
                                Criar cadastro
                            </NavLink>
                        </p>
            </div>                             
        </div>
      } 
      />
    )
}
 
export default Login;