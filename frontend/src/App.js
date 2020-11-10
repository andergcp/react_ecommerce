import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <a href="/" className="brand">Rayito de Sol</a>
                </div>
                <div>
                    <a href="/cart">Carrito</a>
                    <a href="/signin">Entrar</a>
                </div>
            </header>
            <main>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path='/' component={HomeScreen} exact></Route>
            </main>
            <footer className="row center">
                <p>Rayito de Sol</p>
            </footer>
        </div>
    </BrowserRouter>
    );
}

export default App;
