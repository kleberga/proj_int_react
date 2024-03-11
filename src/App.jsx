import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from "./Layout";
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import SobreMin from './pages/SobreMin';
import Home from './pages/Home';
import MeusProdutos from './pages/MeusProdutos';
import Contato from './pages/Contato';
import Registro from './pages/Registro'
import Login from './pages/Login'
import LoginEntrada from './pages/EntradaLogin'



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
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
