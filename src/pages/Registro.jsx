import { auth } from "../infra/firebase";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail} from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import Layout from "../Layout";
import { useForm } from 'react-hook-form';


const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    //e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/login_entrada")
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


return (
  <Layout children={
    <main >        
    <section>
            <div className="login_registro">                  
                <h4> Cadastrar usuário: </h4>                                                                          
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email" className="email_address" id="email">
                            E-mail:
                        </label><input {
                            ...register("email", {
                                required: "O campo Email é obrigatório",
                                validate: {
                                    matchPattern: (v) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "O campo Email é inválido"
                                },
                            }
                            )}  onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            {errors.email?.message && (
                                <div style={{color: "red"}} > {errors.email.message}</div>
                            )} 
                            <br/>
                            <label htmlFor="senha" className="senha">
                                Senha:
                            </label>
                            <input
                                type="password"
                                label="Criar senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Senha"/>
                            <br/>
                            <br/>
                            <input type="submit"/>
                    </form>
                <p>Já tem uma conta?{' '}
                    <NavLink to="/login" >
                        Efetuar o acesso
                    </NavLink>
                </p>                   
            </div>
    </section>
    </main>
  }/>
 
)
}

export default Signup;