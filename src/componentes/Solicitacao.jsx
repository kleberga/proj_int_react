import { useForm } from "react-hook-form";

export default function Solicitacao({onPedido}){

    const { handleSubmit, formState: { errors } } = useForm();

    return (
        <form className="form" onSubmit={handleSubmit(onPedido)}>
          <br/>
          <label>1 - Selecione o produto</label>
          <br/>
          <select aria-label="Default select example" value={produto} required onChange={(e) => setProduto(e.currentTarget.value)}>
            <option>Selecione o produto:</option>
            <option value="Aplicativos web (sites) e/ou aplicativos de celular para vendas de produtos e serviços online">Aplicativos web (sites) e/ou aplicativos de celular para vendas de produtos e serviços online</option>
            <option value="Aplicativos apenas para apresentação de produtos e serviços">Aplicativos apenas para apresentação de produtos e serviços</option>
            <option value="Melhorias em aplicativos já existentens">Melhorias em aplicativos já existentens</option>
            <option value="Consultoria em segurança de aplicativos">Consultoria em segurança de aplicativos</option>
          </select>
          <br/>
          <label>2 - Descreva o produto que você precisa:</label>
          <br/>
          <textarea
            type="text"
            name="textoMensagem"
            id="textoMensagem"
            placeholder="Escreva a sua mensagem ou solicitação de produto"
            value={descricao} onChange={(e) => setDescricao(e.currentTarget.value)}
            required></textarea>
          <br/>
              <input type="submit"  onClick={onPedido} value="Enviar" />
          </form>
    )
}