import { getAuth, signOut  } from "firebase/auth";
import Layout from "../Layout";
import { useNavigate } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Label
} from 'reactstrap';
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';


export default function EntradaLogin() {

    const navigate = useNavigate();
    const auth0 = getAuth();
    const user = auth0.currentUser;
    if (user !== null) {
        var usuario = `Bem-vindo, ${ user.email }`   
        console.log(usuario)
    } else {
        var usuario = `Usuário não logado` 
    }

    const logOut = async () => {
        try {
        await signOut(auth0);
        navigate("/")
        } catch (err){
          console.error(err);
        }
      };

      const columns = [
        {
          name: 'Produto',
          selector: row => row.produto,

        },
        {
          name: 'Situação atual',
          selector: row => row.situacao,
          width: "600px" 
        },
      ];
      
      const data = [
          {
          id: 1,
          produto: 'Criação de aplicação web para e-commerce',
          situacao: 'Desenvolvimento da UML do modelo de dados',
        }
      ]

      const myNewTheme= {
        rows: {
          style: {
            fontSize: '18px',
          },
        },
        headCells: {
          style: {
            fontSize: '18px',
          },
        },
      }
   
      return (
        <div>
          <Layout barra_login={
              <div>
                  <h4>{usuario}</h4><Button as="input" type="submit" value="Sair" key="deslogar" onClick={logOut} />{''}
              </div>
          } menu={false}></Layout>
          <DataTable
            columns={columns}
            data={data}
            customStyles={myNewTheme}
          />
          <br/>
          <br/>
          <Form className="form">
              <FormGroup>
                <Label for="textoMensagem">Mensagem: </Label>
                <textarea
                  type="text"
                  name="textoMensagem"
                  id="textoMensagem"
                  placeholder="Escreva a sua mensagem ou solicitação de produto"
                />
              </FormGroup>
              <br/>
              <Button as="input" type="submit" value="Enviar" key="enviar_mensagem" />{''}
          </Form>
        </div>
      )
}

