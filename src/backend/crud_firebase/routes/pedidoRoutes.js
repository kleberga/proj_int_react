import express from 'express';

import {
  createPedido,
  getPedidos,
  updatePedido,
  deletePedido,
} from '../controllers/pedidoControllers.js';

const router = express.Router();

router.post('/novo', createPedido);
router.get('/pedidos/:id', getPedidos);
router.put('/pedido/:id_doc', updatePedido);
router.delete('/delete/:id_doc', deletePedido);

export default router;