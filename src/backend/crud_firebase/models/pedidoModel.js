class Pedido {
    constructor(id, id_doc, data, descricao, produto, situacao) {
      (this.id = id),
      (this.id_doc = id_doc),
      (this.data = data),
      (this.descricao = descricao),
      (this.produto = produto),
      (this.situacao = situacao);
    }
  }
  
  export default Pedido;