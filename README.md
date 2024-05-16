# Aplicação web para desenvolvedor full stack freelancer

Este projeto é um exemplo de aplicação web utilizada para divulgar trabalhos de desenvolvedores full stack freelancer, ou seja, desenvolvedores autônomos.

A aplicação possui quatro páginas principais:

- Home: que possui uma imagem e uma frase vinculadas ao trabalho do desenvolvedor;
- Quem sou: reponsável por apresentar a formação e a experiência do desenvolvedor;
- Meus Produtos: onde constam os tipos de trabalhos que o desenvolvedor faz; e
- Contato: página na qual o usuário pode se registrar (ou efetuar login) e acessar uma área própria para solicitar produtos ou acompanhar o andamento dos seus produtos solicitados. Na área do usuário, o mesmo pode visualizar, editar e excluir os seus pedidos de produtos.

No âmbito técnico, a aplicação possui as seguintes características:
a) front-end:
- o front-end foi construído com a biblioteca React, do Javascript, com auxílio do Vite para empacotar o aplicativo e agilizar o seu carregamento durante o desenvolvimento;
- o registro e login são feitos por meio do recurso de login do Google Firebase;
- as solicitações de produtos são salvas no banco de dados Firestores do Firebase;
- os campos de nome, e-mail e senha possuem validações tanto no registro do usuário quanto no login. A solicitação de um produto também possui validações;
- para melhorar o aspecto visual, foram utilizadas imagens de fundo e também botões, ícones e abas de outras bibliotecas compo Bootstrap e Material Icons; e
- o projeto busca utilizar hooks do React, como useState e useEffect.

b) back-end:
- o back-end foi elaborado usando a biblioteca NodeJS do Jascript, juntamente com o framework Express. Adicionalmente, foi utilizada a biblioteca Babel para permitir que o NodeJS entenda códigos escritos na versão ES6 do Javascript;
- para fins de organização, o back-end está dentro da pasta src/backend/crud_firebase;
- na pasta src/backend/crud_firebase/routes, consta o arquivo pedidoRoutes.js. Neste arquivo, constam as rotas utilizadas para o usuário manipular os pedidos de produtos na aplicação. Explicando melhor: o usuário faz o login ou se registra na aplicação e, em seguida, ele é direcionado para uma página onde ele pode acompanhar o andamento dos seus pedidos ou solicitar um novo pedido. Para manipular os pedidos, foram criadas as seguintes rotas: a rota '/novo' cria uma novo pedido; a rota 'pedidos/:id' recupera os pedidos de um usuário; a rota '/pedido/:id_doc' altera um pedido; e a rota '/delete/:id_doc' deleta um pedido;
- na pasta src/backend/crud_firebase/controllers consta o arquivo pedidoControllers.js. Neste arquivo constam os middlewares que são utilizados pelas rotas: 'createPedido' é o middleware responsável por salvar o pedido no banco de dados Firestore do Firebase; 'getPedidos' é responsável por recuperar os pedidos de um usuário no Firestore; 'updatePedido' tem a atribuição de alterar um pedido que encontra-se salvo no Firestore; e 'deletePedido' é responsável por apagar um pedido que encontra-se no Firestore;

Abaixo constam imagens da aplicação em funcionamento:

1. Página "Home":
![Página Home](imagem_home.png)


2. Página "Sobre Mim":
![Página Sobre Mim](imagem_sobreMim.png)


3. Página "Meus Produtos":
![Página Meus Produtos](imagem_MeusProd.png)


4. Página "Contato":
![Página Contato](imagem_Contato.png)


5. Página "Registro":
![Página Registro](imagem_Registro.png)


6. Página "Login":
![Página Login](imagem_Login.png)


7. Página do cliente - aba "Solicitar":
![Página do Cliente1](imagem_Solicitar.png)


8. Página do cliente - aba "Acompanhar Solicitações":
![Página do Cliente2](imagem_Acompanhar.png)
