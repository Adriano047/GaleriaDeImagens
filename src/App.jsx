import React from 'react';
import './styles/App.css';
import GaleriaDeImagens from './Icones/GaleriaDeImagens.png'
import Inicio from './Icones/InicioGaleria.png'
import Galeria from './components/Galeria'
function App() {
  return (
    <div className="App">
      <a name="voltar" href='#voltar'> </a>
      <div className="Voltar">
        <a href="#voltar">
          <img src={Inicio} alt="Voltar" />
        </a>
      </div>
        <header className="Header">
          
            <h1> Galeria De Imagens</h1>
            <img src={GaleriaDeImagens} alt='galeria' width="35px" />
        </header>
          <p className="Atribuições"> 
            <a href=" https://br.freepik.com/autor/liuzishan"> <span> Atribuições</span> </a>
            <a href="https://pixabay.com "><span> Atribuições</span></a>
          </p>
          <Galeria />
    </div>
  );
}

export default App;
