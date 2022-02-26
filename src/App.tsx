import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUser from "./paginas/cadastroUser/CadastroUser";
import Login from "./paginas/login/Login";
import Home from "./paginas/home/Home";
import './App.css';
import ListaTema from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/Store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: "100vh" }}>
            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/logar">
              <Login />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/cadastrar">
              <CadastroUser />
            </Route>

            <Route path="/temas">
              <ListaTema />
            </Route>

            <Route path="/postagens">
              <ListaPostagem />
            </Route>

            <Route exact path='/atualizarPostagem'>
              <CadastroPostagem />
            </Route>

            <Route exact path='/atualizarPostagem/:id'>
              <CadastroPostagem />
            </Route>

            <Route exact path='/atualizarTema'>
              <CadastroTema />
            </Route>

            <Route exact path='/atualizarTema/:id'>
              <CadastroTema />
            </Route>

            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>

            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
