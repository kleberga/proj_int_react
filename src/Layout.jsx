import fox2 from './assets/images/fox2.jpg';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

export default function Layout({children, menu=true, barra_login=false}){

    const [usuario, setUsuario] = useState({id: "", email: "", senha: ""})
    
    if(barra_login){
        barra_login = <h4 id="barra_esquerda">{barra_login}</h4>
    } else {
        barra_login = <div></div>
    }

    let menuBar;
    if(menu){
        menuBar = 
        <nav >
            <ul className="menu">
                <li className='itensMenu'>
                    <Link to="/">Home</Link>
                </li>
                <li className='itensMenu'>
                    <Link to="/sobreMin">Sobre mim</Link>
                </li>
                <li className='itensMenu'>
                    <Link to="/meusProdutos">Meus produtos</Link>
                </li>
                <li className='itensMenu'>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
     </nav> 
    } else {
        menuBar = <div></div>
    }
    return(
        <div id="container">
            <header >
                {barra_login}
                <div>
                    <img src={fox2} id="logo" ></img>
                </div>
                {menuBar}
                <Outlet />  
                <div className="line"></div>
            </header>
            <div className="conteudo">
                {children}
            </div>
            <div className="page-container">
                <footer id="footer">Desenvolvido por Fox Apps (2024)</footer>
            </div>
        </div>
    )
}





