import firebase from '../firebase.js';
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  addDoc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase);

// funcao para criar pedidos
export const createPedido = async (req, res, next) => {
    try {
      var novoPedido = req.body
      const pedidoRef = doc(collection(db, 'pedidos'), novoPedido.id_doc);
      await setDoc(pedidoRef, novoPedido);
      res.status(200).send('produto criado com sucesso');
      next()
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  // funcao para recuperar os pedidos de um usuario
  export const getPedidos = async (req, res, next) => {
    const id = req.params.id;
    try {
      const collection_ref = collection(db, "pedidos")
      const q = query(collection_ref, where("id", "==", id))
      const doc_refs = await getDocs(q);
      const data = [];
      if(doc_refs.empty){
        res.status(200).send([]);
      } else {
        doc_refs.forEach((doc) => {
          data.push({id: doc.id, ...doc.data()})
        })
        res.status(200).send(data);
      }
      next()
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  // funcao para atualizar um pedido
  export const updatePedido = async (req, res, next) => {
    try {
      const id_doc = req.params.id_doc
      const data = req.body
      const pedido = doc(db, 'pedidos', id_doc);
      await updateDoc(pedido, data);
      res.status(200).send('pedido atualizado com sucesso');
      next()
    } catch (error) {
      res.status(400).send(`Erro ao atualizar o pedido: ${error.message}`);
    }
  };

  // funcao para deletar um pedido
  export const deletePedido = async (req, res, next) => {
    try {
      const id = req.params.id_doc;
      await deleteDoc(doc(db, 'pedidos', id));
      res.status(200).send('pedido deletado com sucesso');
      next()
    } catch (error) {
      res.status(400).send(error.message);
    }
  };