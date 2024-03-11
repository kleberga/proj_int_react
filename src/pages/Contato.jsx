import Layout from "../Layout";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

export default function Contato(){

    return(
        <Layout children={
          <div>
            <h3 className="conteudoPaginas">Efetue <a href="http://localhost:5173/login">login</a>, caso já possua cadastro, 
            ou <a href="http://localhost:5173/registro">registre-se</a> para verificar a situação do seu produto ou para solicitar um produto.</h3>
        </div>
    }/>
    )
}