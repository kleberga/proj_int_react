import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SobreMin from './pages/SobreMin';
import Home from './pages/Home';
import MeusProdutos from './pages/MeusProdutos';
import Contato from './pages/Contato';
import Registro from './pages/Registro'
import Login from './pages/Login'
import LoginEntrada from './pages/EntradaLogin'
import AcompPedido from './pages/AcompPedido'
import RecuperarSenha from './pages/RecuperarSenha'


function App() {

  return (
    <Router>
      <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="sobreMin" element={<SobreMin />}/>
        <Route path="meusProdutos" element={<MeusProdutos />}/>
        <Route path="contato" element={<Contato />}/>
        <Route path="registro" element={<Registro />}/>
        <Route path="login" element={<Login />}/>
        <Route path="login_entrada" element={<LoginEntrada />}/>
        <Route path="acomp_pedido" element={<AcompPedido />}/>
        <Route path="recup_senha" element={<RecuperarSenha />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
