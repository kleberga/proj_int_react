import Layout from '../Layout';

export default function MeusProdutos(){
    return(
        <Layout children={
                <ul className="conteudoPaginas">
                    <li>Aplicativos web (sites) e/ou aplicativos de celular para vendas de produtos e serviços online;</li>
                    <li>Aplicativos apenas para apresentação de produtos e serviços;</li>
                    <li>Melhorias em aplicativos já existentes; e</li>
                    <li>Consultoria em segurança de aplicativos.</li>
                </ul>
    } />
    )
}