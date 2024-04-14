import {Container, Row, Col, Stack, Image, Nav, NavLink} from "react-bootstrap"
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import fox2 from '../assets/images/fox2.jpg';
import { Envelope, Telephone } from 'react-bootstrap-icons';

export default function Rodape(){
    return(
        <footer >
            <Container fluid>
                <Row className="bg-dark text-white">
                    <Col className="mx-5">
                        <Image
                            src={fox2}
                            alt="logo da empresa"
                            rounded
                            width={150}
                            height={150}
                        />
                        <h2>Fox Apps</h2>
                        <p>Aplicativos para o seu negócio navegar com toda tranquilidade</p>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <h4>Links úteis</h4>
                            <NavLink href="/" className="text-white">Home</NavLink>
                            <NavLink href="/sobreMin" className="text-white">Sobre mim</NavLink>
                            <NavLink href="/meusProdutos" className="text-white">Meus produtos</NavLink>
                            <NavLink href="/contato" className="text-white">Contato</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        <h4>Entre em contato</h4>
                        <p>
                            <Envelope className="icone_rodape"/>
                             email@fakeemail.com
                            </p>
                        <p>
                            <Telephone className="icone_rodape"/>
                            (99) 99999-9999
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}