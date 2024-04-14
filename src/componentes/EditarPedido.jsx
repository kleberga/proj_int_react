import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';

export default function EditarPedido({setProduto, produto, funcaoSubmit, nomeBotao, cancelarAlteracao, setDescricao, descricao}){

    const { register, handleSubmit, formState: { errors }} = useForm();

    return (
        <div>
            <form id='form_alterar_pedido' className="form" onSubmit={handleSubmit(funcaoSubmit)}>
                <br/>
                <label>1 - Selecione o produto</label>
                <br/>
                <select aria-label="Default select example" name="seletor" id="seletor" className="form_pedido"
                                  {...register("seletor", {
                                    required: "A seleção do produto é obrigatória",
                                    validade: {
                                      selecaoProduto: (value) => value != "" || "O produto deve ser selecionado",
                                    },
                                  })} onChange={(e) => setProduto(e.currentTarget.value)}
                                  value={produto}>
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
                  onChange={(e) => setDescricao(e.currentTarget.value)}
                  value={descricao}>
                </textarea>
                <div className="errorsContainer">
                  {errors.textoMensagem?.message && (
                <div className="erros">{errors.textoMensagem.message}</div> 
                )}
                </div>
                <br/>
                </form>
                <div>
                  <Button variant="dark" type="submit" form='form_alterar_pedido'>{nomeBotao}</Button> &nbsp;
                  <Button variant="dark" type="button" value="Cancelar" onClick={cancelarAlteracao}>Cancelar</Button>
                </div>
                <h4>&nbsp;</h4>
        </div>
    )
}