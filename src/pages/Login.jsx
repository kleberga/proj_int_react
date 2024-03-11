
import Layout from "../Layout";
import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from "../infra/firebase";
import { NavLink, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/login_entrada")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
      <Layout children={
        <>
            <main >        
                <section>
                    <div className="login_registro">                                            
                        <h4> Efetuar login: </h4>                                
                        <form>                                              
                            <div>
                                <label htmlFor="email-address" className="email_address">
                                    E-mail:
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="E-mail"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="senha" className="senha">
                                    Senha:
                                </label>
                                <input
                                    id="senha"
                                    name="senha"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Senha"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <br/>
                            <div>
                                <Button as="input" type="submit" value="Enviar" onClick={onLogin} />{''}
                            </div>                               
                        </form>
                        <p className="text-sm text-white text-center">
                            Ainda não tem conta? {' '}
                            <NavLink to="/registro">
                                Criar cadastro
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
      } />
    )
}
 
export default Login;