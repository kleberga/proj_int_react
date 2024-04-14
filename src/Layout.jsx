import fox2 from './assets/images/fox2.jpg';
import { Outlet, Link } from "react-router-dom";
import Footer from "./componentes/Rodape"
import './App.css'

export default function Layout({children, menu=true, barra_login=false}){

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
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    )
}





