import Layout from "../Layout";
import { Link } from "react-router-dom";
import ContatoImage from '../assets/images/contato3.png';

export default function Contato(){

    return(
        <Layout children={
          <div className="gfg">
          <img id="imgBanner" src={ContatoImage}></img>
            <div className="conteudoPaginas">
              <p >
                Efetue <Link className="link_contato" to="/login">login</Link>, caso já possua cadastro, 
                ou <Link className="link_contato" to="/registro">registre-se</Link> para verificar <br/> 
                a situação do seu produto ou para solicitar um produto.
              </p>
          </div>
        </div>

    }/>
    )
}