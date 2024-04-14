import { getAuth, signOut  } from "firebase/auth";
import Layout from "../Layout";
import { useNavigate } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import {db} from '../infra/firebase';
import {doc, collection, where, query, getDocs, addDoc, serverTimestamp, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditarPedido from "../componentes/EditarPedido";
import EditIcon from '@mui/icons-material/Edit';


export default function EntradaLogin() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
  const navigate = useNavigate();

  const [produto, setProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [userData, setUserData] = useState([]);
  const [userPedido, setUserPedido] = useState([]);
  const [pedidoUid, setPedidoUid] = useState('');
  const [editarPedido, setEditarPedido] = useState(false);
  const [situacaoEditada, setSituacaoEditada] = useState('');
  const [createdAtEditada, setCreatedAtEditada] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [editarSuccess, setEditarSuccess] = useState(false);

  const auth0 = getAuth();
  const user = auth0.currentUser;

  const colletionRef = collection(db, 'pedidos');

  async function fetchDataFromFirestore(nomeBase){
    const collection_ref = collection(db, nomeBase)
    const q = query(collection_ref, where("id", "==", user.uid))
    const doc_refs = await getDocs(q);
    const data = [];
    doc_refs.forEach((doc) => {
      data.push({id: doc.id, ...doc.data()})
    })
    return data;
  }

  async function fetchData2(){
    const data = await fetchDataFromFirestore("pedidos");
    setUserPedido(data);
  }

  useEffect(() => {
    async function fetchData(){
      const data = await fetchDataFromFirestore("nomeUsuario");
      setUserData(data);
    }
    fetchData();
    fetchData2();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  }, [submitSuccess]);

  useEffect(() => {
    setTimeout(() => {
      setEditarSuccess(false);
    }, 3000);
  }, [editarSuccess]);


  if (user != null) {
      var usuario = `Bem-vindo, ${ userData.map((user) => user.nome ) }`
  } else {
      var usuario = "Usuário não logado";
  };

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
        cell: row => (
          <IconButton
            aria-label="Deletar"
            color="secondary"
            onClick={() => deletarPedido(row.id_doc)}
            title="Deletar"
          > <DeleteIcon className="delete_icon" />
          </IconButton>
        ),
        width:'40px'
      },
      {
        cell: row => (
          <IconButton
            aria-label="Editar"
            color="secondary"
            onClick={() => updatePedido(row)}
            title="Editar"
          > <EditIcon className="edit_icon" />
          </IconButton>
        ),
        width:'40px'
      },
      {
        id: "id_doc",
        name: 'ID Doc.',
        selector: row => row.id_doc,
        wrap: true,
        omit: true
      },
      {
        id: "data_hora",
        name: 'Data/Hora',
        selector: row => row.data,
        wrap: true,
        sortable: true,
        width:'220px'
      },
      {
        name: 'Nome',
        selector: row => row.nome,
        wrap: true,
        sortable: true
      },
      {
        name: 'E-mail',
        selector: row => row.email,
        wrap: true,
        sortable: true
      },
      {
        name: 'Produto',
        selector: row => row.produto,
        wrap: true,
        sortable: true
      },
      {
        name: 'Descrição',
        selector: row => row.descricao,
        wrap: true,
        sortable: true
      },
      {
        name: 'Situação atual',
        selector: row => row.situacao,
        wrap: true,
        sortable: true
      },
      {
        name: 'createdAt',
        selector: row => row.createdAt,
        wrap: true,
        omit: true
      }
    ];
    
    const data = [];

    userPedido.map((valor) => data.push({id_doc: valor.id_doc, data: valor.data, nome: userData.map((user) => user.nome ), 
      email: user.email, produto: valor.produto, descricao: valor.descricao, situacao: valor.situacao, createdAt: valor.createdAt}) );

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
      };

      function gerarDataHora(){
        var currentDate = new Date();
        var dia = currentDate.getDate().toString();
        console.log(currentDate)
        if(dia.length==1){
          dia = "0"+dia;
        }
        console.log(`dia: ${dia}`)
        var month = (currentDate.getMonth()+1).toString();
        if(month.length==1){
          month = "0"+month;
        }
        var hora = currentDate.getHours().toString();
        if(hora.length==1){
          hora = "0"+hora;
        }
        var minutos = currentDate.getMinutes().toString();
        if(minutos.length==1){
          minutos = "0"+minutos;
        }
        var segundos = currentDate.getSeconds().toString();
        if(segundos.length==1){
          segundos = "0"+segundos;
        }
        const dataHoraAtual = dia + "/" + month + "/" + currentDate.getFullYear() + " - " + hora + ":" 
        + minutos + ":" + segundos;

        console.log(`dataHoraAtual: ${dataHoraAtual}`)

        return dataHoraAtual;
      }

      async function onPedido(dados)  {
          var dataHoraAtual = gerarDataHora();
            var novoPedido = {
              id_doc: uuidv4(),
              data: dataHoraAtual,
              id: user.uid,
              produto: produto,
              descricao: descricao,
              situacao: "Entrarei em contato por e-mail para discutirmos a sua solicitação",
              createdAt: serverTimestamp(),
              lastUpdate: serverTimestamp()
            }
            try {
              const pedidoRef = doc(colletionRef, novoPedido.id_doc);
              await setDoc(pedidoRef, novoPedido);
              reset();
              fetchData2();
              setSubmitSuccess(true)
            } catch (e) {
              console.error("Error adding document: ", e);
            }  
      };


      async function deletarPedido(pedidoUid){
        try {
          const pedidoRef = doc(colletionRef, pedidoUid);
          await deleteDoc(pedidoRef, pedidoRef);
          fetchData2();
        } catch (error) {
          console.error(error);
        }
      };

      function updatePedido(linha){
        setProduto(linha.produto);
        setDescricao(linha.descricao);
        setPedidoUid(linha.id_doc);
        setEditarPedido(true);
        setSituacaoEditada(linha.situacao);
        setCreatedAtEditada(linha.createdAt);
      }

      async function salvarPedidoAlterado(){
        var dataHoraAtual = gerarDataHora();
        var pedidoAlterado = {
          id_doc: pedidoUid,
          data: dataHoraAtual,
          id: user.uid,
          produto: produto,
          descricao: descricao,
          situacao: situacaoEditada,
          createdAt: createdAtEditada,
          lastUpdate: serverTimestamp()
        }
        console.log(pedidoUid);
        try {
          const pedidoRef = doc(colletionRef, pedidoUid);
          await updateDoc(pedidoRef, pedidoAlterado);
        } catch (error) {
          console.error(error);
        }
        fetchData2();
        setEditarPedido(false);
        setEditarSuccess(true);
      }

      function cancelarAlteracao(){
        setEditarPedido(false);
      }

      return (
        <Layout barra_login={ 
          <div>
            <div className="card_login">
              <Card  bg={"dark"} text={"light"}>
                    <Card.Body>
                      <Card.Text>
                        {usuario}
                      </Card.Text>
                      <Button variant="light" key="sair" type="submit" onClick={logOut}>Sair</Button>
                    </Card.Body>
                  </Card>
            </div>
          </div>
        } menu={false} children={
          <div id="exTab1">
  
          <Tabs
            defaultActiveKey="solicit_pedido"
            className="uncontrolled_tab"
            variant="pills"
            >
            <Tab eventKey="solicit_pedido" title="Solicitar produtos" className="items_tab">
            <form className="form" id='form_enviar_pedido' onSubmit={handleSubmit(onPedido)}>
              <br/>
              <label>1 - Selecione o produto</label>
              <br/>
              <select aria-label="Default select example" name="seletor" id="seletor" className="form_pedido"
                                {...register("seletor", {
                                  required: "A seleção do produto é obrigatória",
                                  validade: {
                                    selecaoProduto: (value) => value != "" || "O produto deve ser selecionado",
                                  },
                                })} onChange={(e) => setProduto(e.currentTarget.value)}>
                <option value=""></option>
                <option value="Aplicativos web (sites) e/ou aplicativos de celular para vendas de produtos e serviços online">Aplicativos web (sites) e/ou aplicativos de celular para vendas de produtos e serviços online</option>
                <option value="Aplicativos apenas para apresentação de produtos e serviços">Aplicativos apenas para apresentação de produtos e serviços</option>
                <option value="Melhorias em aplicativos já existentens">Melhorias em aplicativos já existentens</option>
                <option value="Consultoria em segurança de aplicativos">Consultoria em segurança de aplicativos</option>
              </select>
              <div className="errorsContainer">
                {errors.seletor?.message && (
              <div className="erros">{errors.seletor.message}</div> 
              )}
              </div>
              <br/>
              <label>2 - Descreva a sua necessidade, de forma mais detalhada possível:</label>
              <br/>
              <textarea
                type="text"
                className="form_pedido"
                name="textoMensagem"
                id="textoMensagem"
                placeholder="Descreva a sua necessidade"
                {...register("textoMensagem", {
                  required: "A descrição da sua necessidade é obrigatória",
                  validade: {
                    selecaoProduto: (value) => value != "" || "A descrição da sua necessidade é obrigatória",
                  },
                })}
                onChange={(e) => setDescricao(e.currentTarget.value)}>
              </textarea>
              <div className="errorsContainer">
                {errors.textoMensagem?.message && (
              <div className="erros">{errors.textoMensagem.message}</div> 
              )}
              </div>
              <br/>
              <Button type="submit" variant="dark" form='form_enviar_pedido'>Enviar</Button>
              {submitSuccess === true && <p className="mensagem_envio">O seu pedido foi enviado com sucesso!</p>}
              </form>
                  </Tab>
                  <Tab eventKey="acomp_pedido" className="tabela_pedidos" title="Acompanhar solicitações">
                    <div>
                    <DataTable
                      columns={columns}
                      data={data}
                      customStyles={myNewTheme}
                      responsive
                      defaultSortFieldId="data_hora"
                      defaultSortAsc={false}
                      noDataComponent="Não constam pedidos"
                    />
                    </div>
                    {editarSuccess === true && <p className="mensagem_envio">O seu pedido foi alterado com sucesso!</p>}
                    <br/>
                      <div className="botoes_editar">
                        {editarPedido === true && <EditarPedido setProduto={setProduto} funcaoSubmit={salvarPedidoAlterado} nomeBotao={"Alterar"} 
                        cancelarAlteracao={cancelarAlteracao} setDescricao={setDescricao} descricao={descricao} produto={produto}/>}
                      </div>
                  </Tab>
                </Tabs>
                </div>
        } />
    )
}

