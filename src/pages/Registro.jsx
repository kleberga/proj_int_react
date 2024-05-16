import { auth } from "../infra/firebase";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Layout from "../Layout";
import { useForm } from 'react-hook-form';
import LoginImage from '../assets/images/login2.png';
import Button from 'react-bootstrap/Button';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../infra/firebase';
import axios from 'axios'


const Signup = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [removeErro, setRemoveErro] = useState(false);


  const onSubmit = async (e) => {
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          try {
            const docRef = addDoc(collection(db, "nomeUsuario"), {
                nome: nome,
                id: user.uid
            });
            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
            console.error("Error adding document: ", e);
            }
          console.log(user);
          navigate("/login_entrada")
      })
      .catch((error) => {
          const errorCode = error.code;
          if(error.code == "auth/email-already-in-use"){
            setRemoveErro(true);
        }
          console.log(errorCode);
      });
  }


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    setTimeout(() => {
        setRemoveErro(false);
      }, 4000);
},[removeErro])

return (
  <Layout children={
    <div className="gfg"> 
        <img id="imgBanner" src={LoginImage}></img>       
            <div className="conteudoPaginas2">                  
                <h4 className="text_login"> Cadastrar usuário: </h4>
                    <br/>                                                                      
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="box">
                            <div className="nome_label">
                                <label htmlFor="nome" className="nome">
                                        Nome:
                                </label> 
                            </div>
                            <div className="input_nome">
                                <input
                                    id="nome"
                                    className="input_boxes" {
                                        ...register("nome", {
                                            required: "O campo Nome é obrigatório",
                                            validate: {
                                                matchLength: (v) => v.length > 5 || "O campo Nome deve ter pelo menos 5 caracteres"
                                            },
                                        }
                                        )}  onChange={(e)=>setNome(e.target.value)} placeholder="Nome" />
                                        {errors.nome?.message && (
                                            <div className="erros2"> {errors.nome.message}</div>
                                        )}
                            </div>
                            <br/>
                            <br/>
                            <div className="email_label">
                                <label htmlFor="email" className="email_address" id="email">
                                    E-mail:
                                </label>
                            </div>
                                <div className="input_email">
                                    <input id="email-address" className="input_boxes"{
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
                                <div className="senha_label">
                                    <label htmlFor="senha" className="senha">
                                        Senha:
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        label="Criar senha"
                                        className="input_boxes" {
                                            ...register("senha", {
                                                required: "O campo Senha é obrigatório",
                                                validate: {
                                                    matchLength: (v) => v.length > 8 || "O campo Senha deve ter pelo menos 8 caracteres"
                                                },
                                            }
                                            )}  onChange={(e) => setPassword(e.target.value)}  placeholder="Senha" />
                                            {errors.senha?.message && (
                                                <div className="erros2"> {errors.senha.message}</div>
                                            )} 
                                </div>
                                    <br/>
                                    <br/>
                                <div>
                                    <Button className="botoes" as="input" variant="dark" type="submit" value="Enviar" />{''}
                                </div> 
                                {removeErro === true && <div className="erros2"><p>Erro: o E-mail informado já está cadastrado.</p></div>}
                </div>
                </form>
                <br/>
                <p>Já tem uma conta?{' '}
                    <NavLink to="/login" >
                        Efetuar o acesso
                    </NavLink>
                </p>                   
            </div>
        </div>
  }/>
)
}

export default Signup;